import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';

const App: React.FC = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Notes/>}  />
      </Routes>
  );
}

export default App;
