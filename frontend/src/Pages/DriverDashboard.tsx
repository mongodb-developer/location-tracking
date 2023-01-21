import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { DRIVER_EMAIL_DEFAULT, API_URL } from '../constants';

const socket = io(API_URL);

const DriverDashboard = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    // Setting the seeded driver email to identify a logged in driver
    // Modify this part as per your needs like setting an auth token
    sessionStorage.setItem('userEmail', DRIVER_EMAIL_DEFAULT);

    // Establish Socket
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // on Unmount
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  return <>DriverDashboard</>;
};
export default DriverDashboard;
