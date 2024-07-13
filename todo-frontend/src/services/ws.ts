import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../constants";

const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo: Socket = io(SERVER_URL, {
      withCredentials: true,
      path: "/ws",
    });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }

    return cleanup;
  }, []);

  return socket;
};

export default useSocket;
