import { Point } from 'geojson';
import { LatLng } from 'leaflet';

export interface AppRes {
  data: any;
  isError: boolean;
  errMsg?: string;
}

export enum ShipmentStatus {
  requested = 'requested',
  deliveryAssociateAssigned = 'deliveryAssociateAssigned',
  pickupLocationReached = 'pickupLocationReached',
  transporting = 'transporting',
  dropLocationReached = 'dropLocationReached',
  delivered = 'delivered',
  cancelled = 'cancelled',
}
export interface IShipment {
  _id: string;
  pickupLocation: Point;
  dropLocation: Point;
  userId: string;
  status: ShipmentStatus;
  deliveryAssociateId?: string;
}
export interface ShipmentRes extends AppRes {
  data: IShipment;
}

export interface IUser {
  _id: string;
  email: string;
  name: string;
  organization: string;
  roles: Array<string>;
}

export interface UserRes extends AppRes {
  data: IUser;
}

export interface TokenRes extends AppRes {
  data: { token: string };
}

export enum DashboardStatus {
  NO_SHIPMENT = 'NO_SHIPMENT',
  SHIPMENT_INITIATED = 'SHIPMENT_INITIATED',
  PICKUP_SELECTED = 'PICKUP_SELECTED',
  DROP_SELECTED = 'DROP_SELECTED',
  SEARCHING_ASSOCIATES = 'SEARCHING_ASSOCIATES',
  ASSOCIATE_ASSIGNED = 'ASSOCIATE_ASSIGNED',
  PICKUP_LOCATION_REACHED = 'PICKUP_LOCATION_REACHED',
  TRANSPORTING = 'TRANSPORTING',
  DROP_LOCATION_REACHED = 'DROP_LOCATION_REACHED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}
export interface IInfo {
  title: string;
  msg: string;
}
export interface State {
  pickupLocation: LatLng;
  isPickupDraggable: boolean;
  isShowPickupMarker: boolean;
  dropLocation: LatLng;
  isDropDraggable: boolean;
  isShowDropMarker: boolean;
  driverLocation: LatLng | null;
  dashboardStatus: DashboardStatus;
}
export interface IAction {
  type: string;
  payload?: any;
}
