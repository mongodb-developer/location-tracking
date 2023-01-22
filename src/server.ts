require('dotenv').config();
import app from './app';
import http from 'http';
import { Server } from 'socket.io';
import socketHandler from './socketHandler';
import dbClient from './dbClient';
import createAllIndexes from './createIndex';
import seed from './seed';
import deliveryAssociateWatchers from './watchers/deliveryAssociates';
import shipmentWatchers from './watchers/shipment';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: true
  },
});

/**
 * Start Express server.
 */
server.listen(app.get('port'), async () => {
  try {
    await dbClient();
    await createAllIndexes();
    await seed();

    socketHandler(io);

    // Initialize MongoDB ChangeStream watchers
    await deliveryAssociateWatchers(io);
    await shipmentWatchers(io);
    
    // Server start logs
    console.log('node version', process.version);
    const GREEN_LINE = '\x1b[32m%s\x1b[0m';
    console.log(GREEN_LINE, 'Server started');
    console.log(`Port: ${app.get('port')}`);
    console.log(`Environment: ${app.get('env')}`);
  } catch (error) {
    console.error(error);
  }
});

export default server;
