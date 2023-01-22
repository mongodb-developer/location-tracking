import { Server } from 'socket.io';
import { socketEvents } from '../constants';
import ShipmentCollection from '../models/Shipment';

const watcher = async (io: Server) => {
  const collection = await ShipmentCollection();
  const changeStream = collection.watch([], { fullDocument: 'updateLookup' });
  changeStream.on('change', (event) => {
    // @ts-ignore
    const fullDocument = event.fullDocument;
    if (event.operationType === 'insert') {
      // Broadcast Shipment Available Msg to Delivery Associates
      io.emit(socketEvents.SHIPMENT_CREATED, fullDocument);
    }
    if (event.operationType === 'update') {
      io.to(String(fullDocument._id)).emit(
        socketEvents.SHIPMENT_UPDATED,
        fullDocument
      );
    }
  });
};

export default watcher;
