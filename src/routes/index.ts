import { Router } from 'express';
import { pong } from '../controller/ping';
import * as shipment from '../controller/shipment';

let routes = Router();

/**
 * Health check route.
 * Always returns 200 OK
 */
routes.get('/ping', pong);

// Shipment
routes.post('/shipment', shipment.createShipment);
routes.patch(
  '/shipment/:id/delivery-associate',
  shipment.patchDeliveryAssociate
);
routes.patch('/shipment/:id/status', shipment.patchStatus);
export default routes;
