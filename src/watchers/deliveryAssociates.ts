import { Server } from 'socket.io';
import { socketEvents } from '../constants';
import DeliveryAssociateCollection from '../models/DeliveryAssociate';

const watcher = async (io: Server) => {
  const collection = await DeliveryAssociateCollection();
  const changeStream = collection.watch([], { fullDocument: 'updateLookup' });
  changeStream.on('change', (event) => {
    if (event.operationType === 'update') {
      const fullDocument = event.fullDocument;
      io.to(String(fullDocument._id)).emit(
        socketEvents.DA_LOCATION_CHANGED,
        fullDocument
      );
    }
  });
};

export default watcher;
