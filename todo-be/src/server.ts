const express = require('express');
const bodyParser = require('body-parser');
import { WebSocketServer } from "ws";
const dotenv = require('dotenv').config();
const redis = require('redis');
const connectToDb = require('./db');
const PORT = process.env.PORT 

connectToDb();
const app = express();
app.use(bodyParser.json());

const wss = new WebSocketServer({ noServer: true });


// wss.on('connection', (ws) => {
//     console.log('Client connected');
  
//     ws.on('message', (message) => {
//       handleMessage(ws, message.toString());
//     });
  
//     ws.on('close', () => {
//       console.log('Client disconnected');
//     });
//   });


const server = app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

// server.on('upgrade', (request, socket, head) => {
//     wss.handleUpgrade(request, socket, head, socket => {
//         wss.emit('connection', socket, request);
//     });
// }
