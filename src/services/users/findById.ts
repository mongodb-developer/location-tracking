import IUser from 'IUser';
import dbClient from '../../dbClient';
import { dbCollections } from '../../constants';
import { ObjectId, Collection, Document } from 'mongodb';

interface UserDocument extends Document, IUser {
  _id: ObjectId;
}

const findById = async (id: string): Promise<UserDocument> => {
  try {
    const client = await dbClient();
    const userCollection: Collection<UserDocument> = client
      .db()
      .collection(dbCollections.users);
    // Find the user by mongodb Object id
    const result: UserDocument = await userCollection.findOne({
      _id: new ObjectId(id),
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export default findById;
