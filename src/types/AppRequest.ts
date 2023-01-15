import { Request } from 'express';
import IUserJWTPayload from './IUserJWTPayload';

interface AppRequest extends Request {
  user: IUserJWTPayload;
}
export default AppRequest;
