import { Point } from 'geojson';
import IUser from './IUser';
import IDeliveryAssociate from './IDeliveryAssociate';

export enum ShipmentStatus {
  requested = 'requested',
  deliveryAssociateAssigned = 'deliveryAssociateAssigned',
  pickupLocationReached = 'pickupLocationReached',
  transporting = 'transporting',
  dropLocationReached = 'dropLocationReached',
  delivered = 'delivered',
  cancelled = 'cancelled',
}

export default interface IShipment {
  pickupLocation: Point;
  dropLocation: Point;
  userId: string | IUser;
  deliveryAssociateId?: string | IDeliveryAssociate;
  status: ShipmentStatus;
}
