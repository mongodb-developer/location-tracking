import UserCollection from './models/User';

const indexUserCollection = async () => {
  try {
    const usersCollection = await UserCollection();
    // createIndex only creates an index if it doesn't already exist
    await usersCollection.createIndex({ email: 1 }, { unique: true });
  } catch (error) {
    console.log('Error creating index for users collection');
    console.error(error);
  }
};

const createAllIndexes = async () => {
  await indexUserCollection();
};

export default createAllIndexes;
