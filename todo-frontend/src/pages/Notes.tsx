import React,{useState, useCallback} from 'react';
import './Notes.css';
import  useSocket  from '../services/ws';

const Notes: React.FC = () => {

    const socket = useSocket();

    const [ note, setNote ] = useState('');
    
    const handleAddNote = useCallback(() => {
        if (note.trim() && socket && socket.connected) {
            socket.emit("add", note);
            setNote(''); 
        }
    }, [note, socket]);

  return (
    <div className="container">
      <div className="header">
        <h1>Note App</h1>
      </div>
      <div>
        <input type='text' value={note} onChange={(e) => setNote(e.target.value)} placeholder="New Note..."></input>
        <button onClick={handleAddNote}>
          <span className="plus-icon">+</span>
          Add
        </button>
      </div>
      <div>
        <div className="note-item">Sample Note 1</div>
        <div className="note-item">Sample Note 2</div>
        <div className="note-item">Sample Note 3</div>
        <div className="note-item">Sample Note 4</div>
        <div className="note-item">Sample Note 5</div>
        <div className="note-item">Sample Note 6</div>
        <div className="note-item">Sample Note 7</div>
        <div className="note-item">Sample Note 8</div>
        <div className="note-item">Sample Note 9</div>
        <div className="note-item">Sample Note 10</div>
      </div>
    </div>
  );
}

export default Notes;
