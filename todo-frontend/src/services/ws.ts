import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from "../constants";

const serverPath = `${SERVER_URL}/ws`;

// src/hooks/useSocket.js
// src/hooks/useSocket.ts

const useSocket = (): Socket | null => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketIo: Socket = io(serverPath);

        setSocket(socketIo);

        function cleanup() {
            socketIo.disconnect();
        }

        return cleanup;
    }, []);

    return socket;
};

export default useSocket;
