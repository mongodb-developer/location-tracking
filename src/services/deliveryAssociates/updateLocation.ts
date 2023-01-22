import { Point } from 'geojson';
import DeliveryAssociateCollection from '../../models/DeliveryAssociate';

const updateLocation = async (
  email: string,
  location: Point
): Promise<void> => {
  try {
    const collection = await DeliveryAssociateCollection();
    await collection.findOneAndUpdate({ email }, { $set: { location } });
  } catch (error) {
    throw error;
  }
};
export default updateLocation;
