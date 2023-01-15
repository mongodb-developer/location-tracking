import IDeliveryAssociate from '../../types/IDeliveryAssociate';
import dbClient from '../../dbClient';
import { dbCollections } from '../../constants';
import { ObjectId, Collection, Document } from 'mongodb';

interface DADocument extends Document, IDeliveryAssociate {
  _id: ObjectId;
}

const findByEmail = async (email: string): Promise<DADocument | null> => {
  try {
    const client = await dbClient();
    const daCollection: Collection<DADocument> = client
      .db()
      .collection(dbCollections.deliveryAssociates);
    // Find the user by mongodb Object id
    const result: DADocument = await daCollection.findOne({
      email,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export default findByEmail;
