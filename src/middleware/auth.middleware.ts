import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/defaults';

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token || !jwt.verify(token, SECRET as string)) {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized User' });
  }
};
