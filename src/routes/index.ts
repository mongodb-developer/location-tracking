import { Router } from 'express';
import { pong } from '../controller/ping';
import { createUser } from '../controller/user';

let routes = Router();

/**
 * Health check route.
 * Always returns 200 OK
 */
routes.get('/ping', pong);

// user route
routes.post('/user', createUser);
export default routes;
