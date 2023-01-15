import dbClient from './dbClient';
import createAllIndexes from './createIndex';
import IUser from 'IUser';
import IDeliveryAssociate, {
  DeliveryAssociateStatus,
} from './types/IDeliveryAssociate';
import createOneUser from './services/users/createOne';
import createOneDA from './services/deliveryAssociates/createOne';
import findUserByEmail from './services/users/findByEmail';
import findDAByEmail from './services/deliveryAssociates/findByEmail';

const daJohn: IDeliveryAssociate = {
  name: 'John',
  email: 'john@example.com',
  status: DeliveryAssociateStatus.available,
  currentLocation: { coordinates: [0, 0], type: 'Point' },
};

const userAdam: IUser = {
  name: 'Adam',
  email: 'adam@example.com',
  password: 'password123',
};

const main = async () => {
  await dbClient();
  await createAllIndexes(); // Checking indexes on seeders might be required if seeders are executed separately.
  const adam = await findUserByEmail(userAdam.email);
  if (!adam) {
    await createOneUser(userAdam);
  }
  const john = await findDAByEmail(daJohn.email);
  if (!john) {
    await createOneDA(daJohn);
  }
};

export default main;
