import jwt from 'jsonwebtoken';

interface IUserJWTPayload extends jwt.JwtPayload {
  userId: string;
  userEmail: string;
  organizationId: string;
}
export default IUserJWTPayload;
