import express from 'express';
import morgan from 'morgan';
import config from './config';
import AppResponse from './types/AppResponse';
import routes from './routes';
import cors from 'cors';
import db from './dbClient';
import { dbCollections } from './constants';

// Create Express server
const app = express();

// Connect to DB
(async () => {
  try {
    const connection = await db();
    // Index email field on users collection
    await connection
      .db()
      .collection(dbCollections.users)
      .createIndex({ email: 1 }, { unique: true });
  } catch (error) {
    console.error(error);
    console.log('Cannot establish MongoDB connection');
  }
})();

// Set PORT
app.set('port', config.port);

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan('dev'));

// Enable CORS
app.use(cors(config.corsOptions));

// Route Handlers
app.use('/', routes);

// 404 Handler
app.use(function (req, res, next) {
  const status = 404;
  const message = 'Resource not found';
  const errorResponse: AppResponse = {
    data: [],
    isError: true,
    errMsg: message,
  };
  res.status(status).send(errorResponse);
});

// Server Error 500 Handler
// Calling next(error) in any of the routes will call this function
app.use(
  (
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // Incase of 500 Server Error
    // The Error is only logged in server and not sent in response to restrict error details being known in the frontend
    console.error(error);
    const status = 500;
    const message =
      process.env.NODE_ENV === 'development'
        ? error.message
        : 'API Server Error';
    const errorResponse: AppResponse = {
      data: [],
      isError: true,
      errMsg: message,
    };
    res.status(status).send(errorResponse);
  }
);

export default app;