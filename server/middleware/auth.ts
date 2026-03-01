import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-change-in-production';
    const decoded = jwt.verify(token, jwtSecret) as any;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export { AuthRequest };
