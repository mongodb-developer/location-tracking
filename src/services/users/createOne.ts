import UserCollection, {
  IUserDocument,
} from '../../models/User';
import IUser from '../../types/IUser';

export default async function createOne(
  user: IUser
): Promise<IUserDocument> {
  try {
    const collection = await UserCollection();
    const newDoc = await collection.insertOne(user);
    const result = await collection.findOne({ _id: newDoc.insertedId });
    return result;
  } catch (error) {
    throw error;
  }
}
