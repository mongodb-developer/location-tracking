import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { USER_EMAIL_DEFAULT, API_URL } from '../constants';

const socket = io(API_URL);

const UserDashboard = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    // Setting seeded user's email as logged in user
    // You can change this to update logged in user email or id
    localStorage.setItem('userEmail', USER_EMAIL_DEFAULT);

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

  return <>UserDashboard</>;
};
export default UserDashboard;
