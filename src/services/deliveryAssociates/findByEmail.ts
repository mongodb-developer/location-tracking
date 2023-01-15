import DeliveryAssociateCollection, {
  IDeliveryAssociateDocument,
} from '../../models/DeliveryAssociate';

const findByEmail = async (
  email: string
): Promise<IDeliveryAssociateDocument | null> => {
  try {
    const collection = await DeliveryAssociateCollection();
    const associate = await collection.findOne({ email });
    return associate;
  } catch (error) {
    throw error;
  }
};
export default findByEmail;
