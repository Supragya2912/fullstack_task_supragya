import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import connectToMongoDb from './services/connectToMongoDb';
import startWebSocketServer from "./services/startWebSocketServer";
import cors from 'cors';

import apiRouter from './routes/api';

const PORT = process.env.PORT 
console.log({PORT})

const {
    closeMongoConnection
} = connectToMongoDb();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use('/api', apiRouter);

const server = http.createServer(app).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

startWebSocketServer(server);

process.on('SIGINT', async () => {
    console.log('Received SIGINT');
    await closeMongoConnection(true);
    process.exit(0);
});
