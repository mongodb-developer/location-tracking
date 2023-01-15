import { Point } from 'geojson';

export enum DeliveryAssociateStatus {
  available = 'available', // ready to accept new shipment
  delivering = 'delivering', // transporting goods
  off = 'off', // on leave
}

export default interface IDeliveryAssociate {
  email: string;
  name: string;
  status: DeliveryAssociateStatus;
  currentLocation: Point;
}
