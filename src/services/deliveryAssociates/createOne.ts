import dbClient from '../../dbClient';
import IDeliveryAssociate from '../../types/IDeliveryAssociate';
import { dbCollections } from '../../constants';

const collection = dbCollections.deliveryAssociates;

export default async function createOne(deliveryAssociate: IDeliveryAssociate) {
  try {
    const client = await dbClient();
    const result = await client
      .db()
      .collection(collection)
      .insertOne(deliveryAssociate);
    return result;
  } catch (error) {
    throw error;
  }
}
