import { Router, RequestHandler } from 'express';
import { authmiddleware } from '../middleware/authmiddleware';
import prisma from '../PrismaClient/PrismaClientGenerate'; // Adjust path if needed

const status_Router = Router();

// Extend the Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

// POST /api/statuses - Create a new status
const createStatus: RequestHandler = async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { mediaUrl, caption } = req.body;
    if (!mediaUrl) {
      res.status(400).json({ message: 'Media URL is required' });
      return;
    }

    const status = await prisma.status.create({
      data: {
        userId: req.user.id,
        mediaUrl,
        caption: caption || null,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            profilePicUrl: true,
          },
        },
      },
    });

    res.status(201).json(status);
  } catch (error) {
    console.error('Status creation error:', error);
    res.status(500).json({ message: 'Failed to create status' });
  }
};

// GET /api/statuses/user/:userId - Get all active statuses for a given userId
// GET /api/statuses/user/:userId - Get all active statuses for a given userId
const getStatusesByUserId: RequestHandler = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const userExists = await prisma.user.findUnique({ where: { id: userId } });
      if (!userExists) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
  
      const statuses = await prisma.status.findMany({
        where: {
          userId,
          expiresAt: { gt: new Date() },
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              profilePicUrl: true,
            },
          },
          viewers: {
            select: {
              userId: true,
              viewedAt: true,
              user: {
                select: {
                  id: true,
                  username: true,
                  profilePicUrl: true,
                },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
  
      const formatted = statuses.map((status) => {
        const currentUserViewed = status.viewers.some(v => v.userId === req.user?.id);
  
        return {
          id: status.id,
          mediaUrl: status.mediaUrl,
          caption: status.caption,
          expiresAt: status.expiresAt,
          createdAt: status.createdAt,
          user: status.user,
          viewed: currentUserViewed,
          viewers: status.viewers.map(v => ({
            id: v.user.id,
            username: v.user.username,
            profilePicUrl: v.user.profilePicUrl,
            viewedAt: v.viewedAt,
          })),
        };
      });
  
      res.status(200).json(formatted);
    } catch (error) {
      console.error('Status fetch error:', error);
      res.status(500).json({ message: 'Failed to fetch statuses' });
    }
  };
  
// POST /api/statuses/view/:statusId - Mark status as viewed
const markStatusViewed: RequestHandler = async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { statusId } = req.params;

    const status = await prisma.status.findUnique({
      where: { id: statusId },
      select: { expiresAt: true },
    });

    if (!status) {
      res.status(404).json({ message: 'Status not found' });
      return;
    }
    if (status.expiresAt < new Date()) {
      res.status(400).json({ message: 'Status has expired' });
      return;
    }

    const viewer = await prisma.statusViewer.upsert({
      where: {
        statusId_userId: {
          statusId,
          userId: req.user.id,
        },
      },
      create: {
        statusId,
        userId: req.user.id,
      },
      update: {},
      select: {
        id: true,
        statusId: true,
        userId: true,
        viewedAt: true,
      },
    });

    res.status(200).json(viewer);
  } catch (error) {
    console.error('Status view error:', error);
    res.status(500).json({ message: 'Failed to record view' });
  }
};

// Routes
status_Router.post('/create', authmiddleware, createStatus);
status_Router.get('/user/:userId', authmiddleware, getStatusesByUserId);
status_Router.post('/view/:statusId', authmiddleware, markStatusViewed);

export default status_Router;