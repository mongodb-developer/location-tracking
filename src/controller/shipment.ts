import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import IShipment, { ShipmentStatus } from '../types/IShipment';
import AppResponse from '../types/AppResponse';
import createOne from '../services/shipments/createOne';
import updateDA from '../services/shipments/updateDA';
import updateStatus from '../services/shipments/updateStatus';
import findUserByEmail from '../services/users/findByEmail';
import findDAByEmail from '../services/deliveryAssociates/findByEmail';

export const createShipment = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userEmail = req.body.email;
    const userData = await findUserByEmail(userEmail);
    const userId = userData._id.toString();
    const newShipment: IShipment = {
      pickupLocation: req.body.pickupLocation,
      dropLocation: req.body.dropLocation,
      status: ShipmentStatus.requested,
      userId,
    };
    const createdShipment = await createOne(newShipment);
    console.log('createdShipment');
    console.log(createdShipment);
    const response: AppResponse = {
      data: createdShipment,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const patchDeliveryAssociate = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shipmentId = req.params.id;
    const daEmail = req.body.email;
    const daData = await findDAByEmail(daEmail);
    const deliveryAssociateId = daData._id.toString();
    const shipmentWithDeliveryAssociate = await updateDA(
      shipmentId,
      deliveryAssociateId
    );
    console.log('shipmentWithDeliveryAssociate');
    console.log(shipmentWithDeliveryAssociate);
    const response: AppResponse = {
      data: shipmentWithDeliveryAssociate,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const patchStatus = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shipmentId = req.params.id;
    const status = req.body.status;
    const shipment = await updateStatus(shipmentId, status);
    const response: AppResponse = {
      data: shipment,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
