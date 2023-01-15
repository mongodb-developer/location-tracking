require('dotenv').config();
import app from './app';
import http from 'http';
import { Server } from 'socket.io';
import socketHandler from './socketHandler';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: true
  },
});

socketHandler(io);

/**
 * Start Express server.
 */
server.listen(app.get('port'), () => {
  console.log('node version', process.version);
  const GREEN_LINE = '\x1b[32m%s\x1b[0m';
  console.log(GREEN_LINE, 'Server started');
  console.log(`Port: ${app.get('port')}`);
  console.log(`Environment: ${app.get('env')}`);
});

export default server;
