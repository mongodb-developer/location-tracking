import { ObjectId } from 'mongodb';
import ShipmentCollection, { IShipmentDocument } from '../../models/Shipment';
import { ShipmentStatus } from '../../types/IShipment';

export default async function updateStatus(
  _id: string,
  status: ShipmentStatus
): Promise<IShipmentDocument> {
  try {
    const collection = await ShipmentCollection();
    await collection.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { status } }
    );
    const result = await collection.findOne({ _id: new ObjectId(_id) });
    return result;
  } catch (error) {
    throw error;
  }
}
