import { ObjectId, Collection, Document } from 'mongodb';
import IShipment from '../types/IShipment';
import dbClient from '../dbClient';
import { dbCollections } from '../constants';

export interface IShipmentDocument
  extends IShipment,
    Document {
  _id?: ObjectId;
}

const ShipmentCollection = async (): Promise<
  Collection<IShipmentDocument>
> => {
  const mongoClient = await dbClient();
  const collection: Collection<IShipmentDocument> = mongoClient
    .db()
    .collection(dbCollections.shipments);
  return collection;
};

export default ShipmentCollection;
