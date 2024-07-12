import React, { useEffect } from 'react';
import './App.css';
import useSocket from './services/ws';

function App() {
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
    <div className="App">
      <h1>Todo app</h1>
      <h2> This is todo</h2>
    </div>
  );
}

export default App;
