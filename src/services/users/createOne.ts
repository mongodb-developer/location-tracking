import dbClient from '../../dbClient';
import IUser from '../../types/IUser';
import { dbCollections } from '../../constants';

const collection = dbCollections.users;

export default async function createOne(user: IUser) {
  try {
    const client = await dbClient();
    const result = await client.db().collection(collection).insertOne(user);
    return result;
  } catch (error) {
    throw error;
  }
}
