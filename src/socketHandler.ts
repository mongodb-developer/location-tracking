import { Server } from 'socket.io';
import { Point } from 'geojson';
import { socketEvents } from './constants';


interface IUpdateDALocation {
  id: string;
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

    // LEAVE_ROOM
    socket.on(socketEvents.LEAVE_ROOM, (data: ILeaveRoom) => {
      socket.leave(data.roomId);
    });
  });
};
export default socketHandler;
