import ShipmentCollection, {
  IShipmentDocument,
} from '../../models/Shipment';
import IShipment from '../../types/IShipment';

export default async function createOne(
  shipment: IShipment
): Promise<IShipmentDocument> {
  try {
    const collection = await ShipmentCollection();
    const newDoc = await collection.insertOne(shipment);
    const result = await collection.findOne({ _id: newDoc.insertedId });
    return result;
  } catch (error) {
    throw error;
  }
}
