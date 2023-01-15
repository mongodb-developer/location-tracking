import { ObjectId, Collection, Document } from 'mongodb';
import IUser from '../types/IUser';
import dbClient from '../dbClient';
import { dbCollections } from '../constants';

export interface IUserDocument
  extends IUser,
    Document {
  _id?: ObjectId;
}

const UserCollection = async (): Promise<
  Collection<IUserDocument>
> => {
  const mongoClient = await dbClient();
  const collection: Collection<IUserDocument> = mongoClient
    .db()
    .collection(dbCollections.users);
  return collection;
};

export default UserCollection;
