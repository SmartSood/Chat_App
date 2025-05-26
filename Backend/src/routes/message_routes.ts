import { Router } from 'express';
import { authmiddleware } from '../middleware/authmiddleware';
import prisma from '../PrismaClient/PrismaClientGenerate'; // Adjust path as needed

const message_Router = Router();

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

// POST /api/messages/:chatId - Send a new message

//@ts-ignore
message_Router.post('/:chatId', authmiddleware, async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const { chatId } = req.params;
    const { content, mediaUrl, type } = req.body;
    console.log(chatId);

    if (!chatId || (!content && !mediaUrl)) {
      return res.status(400).json({ message: 'Message content or media is required' });
    }

    const message = await prisma.message.create({
      data: {
        chatId,
        senderId: req.user.id,
        content: content || null,
        mediaUrl: mediaUrl || null,
        type,
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

    res.status(201).json(message);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

// GET /api/messages/:chatId - Get messages of a chat

//@ts-ignore
message_Router.get('/:chatId', authmiddleware, async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const { chatId } = req.params;

    const messages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { sentAt: 'asc' },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            profilePicUrl: true,
          },
        },
        seenBy: {
          select: {
            userId: true,
            seenAt: true,
          },
        },
      },
    });

    const formatted = messages.map((msg) => ({
      ...msg,
      seenBy: msg.seenBy,
      seenByCurrentUser: msg.seenBy.some((s) => s.userId === req.user?.id),
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Fetch messages error:', error);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

// POST /api/messages/seen/:messageId - Mark a message as seen
//@ts-ignore
message_Router.post('/seen/:messageId', authmiddleware, async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const { messageId } = req.params;

    const messageExists = await prisma.message.findUnique({ where: { id: messageId } });
    if (!messageExists) {
      return res.status(404).json({ message: 'Message not found' });
    }

    const seen = await prisma.seenMessage.upsert({
      where: {
        messageId_userId: {
          messageId,
          userId: req.user.id,
        },
      },
      create: {
        messageId,
        userId: req.user.id,
      },
      update: {},
      select: {
        id: true,
        messageId: true,
        userId: true,
        seenAt: true,
      },
    });

    res.status(200).json(seen);
  } catch (error) {
    console.error('Mark message as seen error:', error);
    res.status(500).json({ message: 'Failed to mark message as seen' });
  }
});

export default message_Router;
