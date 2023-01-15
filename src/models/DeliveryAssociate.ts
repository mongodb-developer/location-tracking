import { ObjectId, Collection, Document } from 'mongodb';
import IDeliveryAssociate from '../types/IDeliveryAssociate';
import dbClient from '../dbClient';
import { dbCollections } from '../constants';

export interface IDeliveryAssociateDocument
  extends IDeliveryAssociate,
    Document {
  _id?: ObjectId;
}

const DeliveryAssociateCollection = async (): Promise<
  Collection<IDeliveryAssociateDocument>
> => {
  const mongoClient = await dbClient();
  const collection: Collection<IDeliveryAssociateDocument> = mongoClient
    .db()
    .collection(dbCollections.deliveryAssociates);
  return collection;
};

export default DeliveryAssociateCollection;
