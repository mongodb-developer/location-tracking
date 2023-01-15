import { MongoClient } from 'mongodb';
import { dbCollections } from './constants';

const indexUserCollection = async (dbClient: MongoClient) => {
  try {
    const usersCollection = dbClient.db().collection(dbCollections.users);
    // createIndex only creates an index if it doesn't already exist
    await usersCollection.createIndex({ email: 1 }, { unique: true });
  } catch (error) {
    console.log('Error creating index for users collection');
    console.error(error);
  }
};

const createAllIndexes = async (dbClient: MongoClient) => {
  await indexUserCollection(dbClient);
};

export default createAllIndexes;
