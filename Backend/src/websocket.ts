import { WebSocketServer, WebSocket } from 'ws';
import jwt from 'jsonwebtoken';
import prisma from './PrismaClient/PrismaClientGenerate'; // Adjust path to your generated Prisma client
import dotenv from 'dotenv';
import streamifier from 'streamifier';
import { cloudinary } from './utils/cloudinary'; // Adjust path to your Cloudinary utility

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'key';

// Map to keep track of connected clients by userId
const clients = new Map<string, Set<WebSocket>>();

function authenticateClient(token: string): { userId: string } | null {
  try {

    const decoded = jwt.verify(token, JWT_SECRET );
    console.log(decoded)
    //@ts-ignore
    return decoded;
  } catch {
    return null;
  }
}

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, req) => {
 
  // Extract token from query string
  const params = new URLSearchParams(req.url?.split('?')[1]);

 const token=params.get('token')
 console.log(token);
 //@ts-ignore
  const auth = token ? authenticateClient(token) : null;
  if (!auth) {
    ws.send(JSON.stringify({ type: 'error', message: 'Unauthorized' }));
    ws.send(JSON.stringify({
      token
    }))
    ws.close();
    return;
  }
//@ts-ignore
  const userId = auth.id;
  console.log(userId)

  // Add connection to the user's set
  if (!clients.has(userId)) clients.set(userId, new Set());
  clients.get(userId)!.add(ws);

  console.log(`User ${userId} connected, total connections: ${clients.get(userId)!.size}`);

  ws.on('message', async (data) => {
    try {
      const message = JSON.parse(data.toString());

      switch (message.variant) {
        case 'send_message': {
          const { chatId, content, type, mediaUrl } = message;
  
          // Validate message type
          const validTypes = ['TEXT', 'IMAGE', 'VIDEO', 'DOCUMENT', 'AUDIO', 'CONTACT', 'LOCATION'];
          if (!validTypes.includes(type)) {
            ws.send(JSON.stringify({ type: 'error', message: 'Invalid message type' }));
            return;
          }
  
          let uploadedUrl = '';
  
          if (type !== 'TEXT' && mediaUrl) {
            // Upload media to Cloudinary
            const uploadToCloudinary = (): Promise<string> => {
              return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                  {
                    folder: 'chat-media',
                    resource_type: 'auto',
                  },
                  (error, result) => {
                    if (error) return reject(error);
                    resolve(result?.secure_url || '');
                  }
                );
  
                streamifier.createReadStream(Buffer.from(mediaUrl, 'base64')).pipe(stream);
              });
            };
  
            try {
              uploadedUrl = await uploadToCloudinary();
            } catch (uploadErr) {
              console.error('Media upload failed:', uploadErr);
              ws.send(JSON.stringify({ type: 'error', message: 'Media upload failed' }));
              return;
            }
          }
  
          // Save message in DB
          const newMessage = await prisma.message.create({
            data: {
              chatId,
              content,
              type,
              mediaUrl: uploadedUrl || '',
              senderId: userId,
            },
            include: {
              sender: {
                select: {
                  id: true,
                  username: true,
                  profilePicUrl: true,
                },
              },
            },
          });
  
          // Notify all participants
          const chat = await prisma.chat.findUnique({
            where: { id: chatId },
            include: { chatUsers: { select: { userId: true } } },
          });
  
          if (chat) {
            chat.chatUsers.forEach(({ userId: participantId }) => {
              const conns = clients.get(participantId);
              if (conns) {
                conns.forEach((clientWs) => {
                  clientWs.send(JSON.stringify({ type: 'new_message', message: newMessage }));
                });
              }
            });
          }
  
          break;
        }
        //{
        //   const { chatId, content, type, mediaUrl } = message;

        //   // Validate messageType to be one of your enum strings
        //   const validTypes = ['TEXT', 'IMAGE', 'VIDEO', 'DOCUMENT', 'AUDIO', 'CONTACT', 'LOCATION'];
        //   if (!validTypes.includes(type)) {
        //     ws.send(JSON.stringify({ type: 'error', message: 'Invalid message type' }));
        //     return;
        //   }

        //   // Save message in DB
        //   const newMessage = await prisma.message.create({
        //     data: {
        //       chatId,
        //       content,
        //       type,
        //       mediaUrl: mediaUrl || "",
        //       senderId: userId,
        //     },
        //     include: {
        //       sender: {
        //         select: {
        //           id: true,
        //           username: true,
        //           profilePicUrl: true,
        //         },
        //       },
        //     },
        //   });

        //   // Find all chat participants
        //   const chat = await prisma.chat.findUnique({
        //     where: { id: chatId },
        //     include: { chatUsers: { select: { userId: true } } },
        //   });

        //   if (chat) {
        //     chat.chatUsers.forEach(({ userId: participantId }) => {
        //       const conns = clients.get(participantId);
        //       if (conns) {
        //         conns.forEach((clientWs) => {
        //           clientWs.send(JSON.stringify({ type: 'new_message', message: newMessage }));
        //         });
        //       }
        //     });
        //   }

        //   break;
        // }

        case 'mark_seen': {
          const { messageId } = message;

          // Upsert seen message record
          const seen = await prisma.seenMessage.upsert({
            where: {
              messageId_userId: {
                messageId,
                userId,
              },
            },
            create: { messageId, userId },
            update: {},
          });

          // Notify the sender that the message was seen
          const msg = await prisma.message.findUnique({
            where: { id: messageId },
            select: { senderId: true },
          });

          if (msg) {
            const senderConns = clients.get(msg.senderId);
            if (senderConns) {
              senderConns.forEach((clientWs) => {
                clientWs.send(
                  JSON.stringify({
                    type: 'message_seen',
                    messageId,
                    seenByUserId: userId,
                    seenAt: seen.seenAt,
                  })
                );
              });
            }
          }

          break;
        }

        default:
          ws.send(JSON.stringify({ type: 'error', message: 'Unknown message type' }));
      }
    } catch (err) {
      console.error('WebSocket message error:', err);
      ws.send(JSON.stringify({ type: 'error', message: 'Failed to process message' }));
    }
  });

  ws.on('close', () => {
    const userConns = clients.get(userId);
    if (userConns) {
      userConns.delete(ws);
      if (userConns.size === 0) clients.delete(userId);
    }
    console.log(`User ${userId} disconnected.`);
  });
});

console.log('WebSocket server running on ws://localhost:8080');

export default wss;
