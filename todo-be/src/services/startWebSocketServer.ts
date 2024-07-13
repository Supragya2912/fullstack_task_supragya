import { Server } from "socket.io";
import http from "http";
import { addTask } from "../controllers/taskController";

const startWebSocketServer = async (server: http.Server) => {
    const io = new Server(server, {
        path: '/ws',
        allowEIO3: true,
        cors: {
            origin: process.env.CORS_ORIGIN,
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    console.debug('Socket server started');

    io.on('connection', (socket) => {
        console.debug('a user connected');

        socket.send("hello", { message: "Hello from server" }); 


        socket.on('add', async (content: string) => {
            try {
                console.log("CONTENT: ", content);  
                await addTask(content);  
                socket.emit('taskAdded', { message: 'Task added successfully' });
            } catch (error) {
                socket.emit('error', { message: 'Failed to add task', error });
                console.error('Failed to add task', error);
            }
        });

        socket.on('disconnect', () => {
            console.debug('user disconnected');
        });
    });

};

export default startWebSocketServer;