import { MongoClient } from 'mongodb';
import { dbCollections } from '../constants';

const watcher = (db: MongoClient) => {
  const daCollection = db.db().collection(dbCollections.deliveryAssociates);
  const changeStream = daCollection.watch();
  changeStream.on('change', (change) => {
    console.log('Change detected in deliveryAssociates collection');
    console.log(change);
  });
};

export default watcher;
