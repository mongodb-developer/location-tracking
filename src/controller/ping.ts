import { Request, Response, NextFunction } from 'express';
import AppResponse from '../types/AppResponse';

const pong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: AppResponse = { data: 'pong', isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export { pong };
