import axios from 'axios';
import { Point } from 'geojson';
import { API_URL, USER_EMAIL_DEFAULT } from './constants';

export const createShipment = async (
  pickupLocation: Point,
  dropLocation: Point
): Promise<any> => {
  const email = localStorage.getItem('userEmail') || USER_EMAIL_DEFAULT;
  const data = { pickupLocation, dropLocation };
  const config = {
    method: 'post',
    url: `${API_URL}/shipment`,
    data: data,
  };
  const response = await axios(config);
  return response.data as any;
};
