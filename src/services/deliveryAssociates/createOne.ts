import DeliveryAssociateCollection, {
  IDeliveryAssociateDocument,
} from '../../models/DeliveryAssociate';
import IDeliveryAssociate from '../../types/IDeliveryAssociate';

export default async function createOne(
  deliveryAssociate: IDeliveryAssociate
): Promise<IDeliveryAssociateDocument> {
  try {
    const collection = await DeliveryAssociateCollection();
    const newDoc = await collection.insertOne(deliveryAssociate);
    const result = await collection.findOne({ _id: newDoc.insertedId });
    return result;
  } catch (error) {
    throw error;
  }
}
