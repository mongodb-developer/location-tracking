import { Server } from 'socket.io';
import { Point } from 'geojson';
import { socketEvents } from './constants';
import updateLocation from './services/deliveryAssociates/updateLocation';

interface IUpdateDALocation {
  email: string;
  location: Point;
}
interface ISubscribeToShipment {
  shipmentId: string;
}
interface ISubscribeToDA {
  deliveryAssociateId: string;
}
interface ILeaveRoom {
  roomId: string;
}

const socketHandler = (io: Server) => {
  io.on('connection', (socket: any) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });

    // UPDATE_DA_LOCATION : Sent by delivery associates when driving
    socket.on(
      socketEvents.UPDATE_DA_LOCATION,
      async (data: IUpdateDALocation) => {
        const { email, location } = data;
        await updateLocation(email, location);
      }
    );

    /**
     * Socket rooms are based on shipmentIds or deliveryAssociateIds
     * To listen to change streams user needs to subscribe to a shipmentId or deliveryAssociateId
     */
    // SUBSCRIBE_TO_SHIPMENT
    socket.on(
      socketEvents.SUBSCRIBE_TO_SHIPMENT,
      (data: ISubscribeToShipment) => {
        socket.join(data.shipmentId);
      }
    );
    // SUBSCRIBE_TO_DA
    socket.on(socketEvents.SUBSCRIBE_TO_DA, (data: ISubscribeToDA) => {
      socket.join(data.deliveryAssociateId);
    });

    // LEAVE_ROOM
    socket.on(socketEvents.LEAVE_ROOM, (data: ILeaveRoom) => {
      socket.leave(data.roomId);
    });
  });
};
export default socketHandler;
