import { Router } from "express";
import { authmiddleware } from "../middleware/authmiddleware";
import prisma from "../PrismaClient/PrismaClientGenerate";
import { Request, Response } from "express";




const Chat_router=Router();




Chat_router.use(authmiddleware)
Chat_router.get('/my-chats', async (req: Request, res: Response) => {
    try {
        //@ts-ignore
      const currentUserId = req.user.id; 
  

      const chatUsers = await prisma.chatUser.findMany({
        where: {
          userId: currentUserId,
        },
        include: {
          chat: {
            include: {
              chatUsers: {
                include: {
                  user: true, // include user details for each chatUser
                },
              },
              messages: {
                orderBy: { sentAt: 'desc' }, // latest messages first
                take: 10, // limit to last 10 messages (optional)
              },
            },
          },
        },
      });
  
      
      res.status(200).json({ chatUsers });
    } catch (error) {
      console.error('Error fetching chats:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

Chat_router.post("/create_individual_chat",async (req: Request,res: Response)=>{
    //@ts-ignore
    const userId=req.user.id
    const {recieverId}=req.body;
    if (!userId || !recieverId) {
        res.status(400).json({ error: "User ID and Reciever ID are required" });
        return;
    }

    try{
        const existingChat = await prisma.chat.findFirst({
            where: {
              isGroup: false,
              AND: [
                {
                  chatUsers: {
                    some: { userId: userId }
                  }
                },
                {
                  chatUsers: {
                    some: { userId: recieverId }
                  }
                }
              ]
            },
            include: {
              chatUsers: {
                include: {
                  user: true
                }
              },
              messages: true,
            },
          });

        if (existingChat) {
res.json(existingChat);
return;
        }
        const newChat = await prisma.chat.create({
            data: {
                isGroup: false,
                chatUsers: {
                    create: [
                        { userId: userId },
                        { userId: recieverId }
                    ]
                }
            },
            include: {
                chatUsers: {
                    include: {
                        user: true
                    }
                },
                messages: true,
            }
        });

        res.status(201).json(newChat);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating chat', error });
      }
   
})


Chat_router.post("/create_group_chat",async (req: Request,res: Response)=>{
try {
    //@ts-ignore
    const currentUserId = req.user.id;
    const { groupName, userIds,groupDescription,groupImage } = req.body;

    if (!groupName || !userIds || !Array.isArray(userIds) || userIds.length === 0) {
       res.status(400).json({ error: 'Group name and userIds array are required' });
       return;
    }

    // Ensure the current user is part of the group
    if (!userIds.includes(currentUserId)) {
      userIds.push(currentUserId);
    }

    // Create group chat and connect all users
    const groupChat = await prisma.chat.create({
      data: {
        isGroup: true,
        groupName: groupName,
        createdBy: currentUserId,
        groupDescription: groupDescription,
        groupIcon: groupImage,
        chatUsers: {
          create: userIds.map((userId: string) => ({
            user: { connect: { id: userId } },
            role: userId===currentUserId?"admin":"member"
          })),
        },
      },
      include: {
        chatUsers: { include: { user: true } },
        messages: true,
      },
    });

    res.status(201).json({ chat: groupChat });
  } catch (error) {
    console.error('Error creating group chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

Chat_router.post('/group/add',async (req: Request, res: Response)=>{
    try{
        //@ts-ignore
        const currentUserId = req.user.id;
        const {chatId,userId}=req.body;
        if(!chatId||!userId){
            res.json({ error: 'Chat ID and User ID are required' });
            return
        }
        // Check if the chat exists and is a group chat
        const chat= await prisma.chat.findUnique({
            where:{
                id: chatId,
                isGroup:true
            },
            include:{
                chatUsers:true
            }
        })

        if(!chat){
            res.status(404).json({ error: 'Chat not found or is not a group chat' });
            return
        }

        // Check if the user is already in the chat
        const existingChatUser = await prisma.chatUser.findFirst({
            where: {
                chatId: chatId,
                userId: userId
            }
        });
        if (existingChatUser) {
            res.status(400).json({ error: 'User is already in the chat' });
            return;
        }
        // Add the user to the group chat
        const newChatUser = await prisma.chatUser.create({
            
            data: {
                chatId: chatId,
                userId: userId,
                role:"member"

            }
        });
        res.status(200).json({ message: 'User added to group chat', chatUser: newChatUser });

    }
    catch (error) {
        console.error('Error adding user to group chat:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


Chat_router.post('/group/remove', async (req:Request, res:Response) => {
    try {
        //@ts-ignore
      const currentUserId = req.user.id; // from protect middleware, authenticated user
      const { chatId, removeUserId } = req.body;
  
      // 1. Check if chat exists and is a group
      const chat = await prisma.chat.findUnique({
        where: { id: chatId },
        include: {
          chatUsers: true,
        },
      });
  
      if (!chat || !chat.isGroup) {
        res.status(404).json({ message: 'Group chat not found.' });
      }
  
      // 2. Check if current user is admin of this group

        //@ts-ignore
      const isAdmin = chat.chatUsers.some(
        (cu) => cu.userId === currentUserId && cu.role === 'admin'
      );
  
      if (!isAdmin) {
        res.status(403).json({ message: 'You are not an admin of this group.' });
      }
  
      // 3. Check if user to remove is actually in the group
      //@ts-ignore
      const userInGroup = chat.chatUsers.find((cu) => cu.userId === removeUserId);
      if (!userInGroup) {
        res.status(404).json({ message: 'User not found in this group.' });
      }
  
      // 4. Remove the user from ChatUser relation
      await prisma.chatUser.delete({
        where: {
          chatId_userId: {
            chatId: chatId,
            userId: removeUserId,
          },
        },
      });
  
      // Optionally: fetch updated group info
      const updatedChat = await prisma.chat.findUnique({
        where: { id: chatId },
        include: {
          chatUsers: { include: { user: true } },
          messages: true,
        },
      });
  
     res.status(200).json({ message: 'User removed from group.', chat: updatedChat });
    } catch (error) {
      console.error('Error removing user from group:', error);
       res.status(500).json({ message: 'Internal server error' });
    }
  });






  export default Chat_router;