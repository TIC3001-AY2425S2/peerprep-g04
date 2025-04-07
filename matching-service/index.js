const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const matchRoutes = require('./routes/matching-routes.js');
const {startConsumer} = require('./consumer/consumer.js')
const { initSocket, getIO } = require('./socket.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

initSocket(io); // setup socket event listeners

app.use(cors());
app.use(express.json());
app.use('/api', matchRoutes);

server.listen(5000, () => console.log('maching service running on port 5000'));
startConsumer(); // start RabbitMQ consumer
