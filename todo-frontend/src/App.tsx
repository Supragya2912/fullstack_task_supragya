import React, { useEffect } from 'react';
import './App.css';
import useSocket from './services/ws';
import { Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';

const App: React.FC = () => {
  const socket = useSocket();
  
  useEffect(() => {
    if (!socket) return;

    const messageListener = (message: string) => {
        console.log(message);
    };

    socket.on('message', messageListener);

    return () => {
        socket.off('message', messageListener);
    };
  }, [socket]);

  return (
  
      <Routes>
        <Route path="/" element={<Notes/>}  />
      </Routes>
  );
}

export default App;
