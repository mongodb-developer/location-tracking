import axios from 'axios';
import { Point } from 'geojson';
import { API_URL, USER_EMAIL_DEFAULT } from './constants';
import { ShipmentStatus, ShipmentRes } from './types';

export const createShipment = async (
  pickupLocation: Point,
  dropLocation: Point
): Promise<any> => {
  const email = sessionStorage.getItem('userEmail') || USER_EMAIL_DEFAULT;
  const data = { pickupLocation, dropLocation, email };
  const config = {
    method: 'post',
    url: `${API_URL}/shipment`,
    data: data,
  };
  const response = await axios(config);
  return response.data as any;
};

export const updateShipmentStatus = async (
  id: string,
  status: ShipmentStatus
): Promise<ShipmentRes> => {
  const requestBody = { status };
  try {
    const response = await axios.patch(
      `${API_URL}/shipment/${id}/status`,
      requestBody
    );
    return response.data as ShipmentRes;
  } catch (error) {
    throw error;
  }
};

export const updateShipmentDeliveryAssociate = async (
  id: string,
  email: string
): Promise<ShipmentRes> => {
  const requestBody = { email };
  try {
    const response = await axios.patch(
      `${API_URL}/shipment/${id}/delivery-associate`,
      requestBody
    );
    return response.data as ShipmentRes;
  } catch (error) {
    throw error;
  }
};
