import UserCollection, {
  IUserDocument,
} from '../../models/User';

const findByEmail = async (
  email: string
): Promise<IUserDocument | null> => {
  try {
    const collection = await UserCollection();
    const user = await collection.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};
export default findByEmail;
