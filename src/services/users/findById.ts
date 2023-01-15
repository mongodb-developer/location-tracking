import { ObjectId } from 'mongodb';
import UserCollection, { IUserDocument } from '../../models/User';

const findById = async (id: string): Promise<IUserDocument | null> => {
  try {
    const collection = await UserCollection();
    const user = await collection.findOne({ _id: new ObjectId(id) });
    return user;
  } catch (error) {
    throw error;
  }
};
export default findById;
