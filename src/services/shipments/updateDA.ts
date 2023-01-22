import { ObjectId } from 'mongodb';
import ShipmentCollection, { IShipmentDocument } from '../../models/Shipment';

export default async function updateDA(
  _id: string,
  deliveryAssociateId: string
): Promise<IShipmentDocument> {
  try {
    const collection = await ShipmentCollection();
    await collection.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { deliveryAssociateId } }
    );
    const result = await collection.findOne({ _id: new ObjectId(_id) });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
