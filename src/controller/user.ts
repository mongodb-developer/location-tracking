import { Request, Response, NextFunction } from 'express';
import AppResponse from '../types/AppResponse';
import createOne from '../services/users/createOne';

// Express route handler for creating new user
// The json body should contain IUser interface
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate the request body based on IUser interface
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    if (!email || !password || !name) {
      const status = 400;
      const message =
        'Invalid request body. Email, password and name are required.';
      const errorResponse: AppResponse = {
        data: [],
        isError: true,
        errMsg: message,
      };
      res.status(status).send(errorResponse);
      return;
    }
    const result = await createOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
