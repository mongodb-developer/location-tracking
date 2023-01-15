import IUser from 'IUser';
import dbClient from '../../dbClient';
import { dbCollections } from '../../constants';
import { ObjectId, Collection, Document } from 'mongodb';

interface UserDocument extends Document, IUser {
  _id: ObjectId;
}

const findByEmail = async (email: string): Promise<UserDocument | null> => {
  try {
    const client = await dbClient();
    const userCollection: Collection<UserDocument> = client
      .db()
      .collection(dbCollections.users);
    // Find the user by mongodb Object id
    const result: UserDocument = await userCollection.findOne({
      email,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export default findByEmail;
