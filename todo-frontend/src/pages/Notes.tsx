import React from 'react';
import './Notes.css';

const Notes: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Note App</h1>
      </div>
      <div>
        <input type='text' placeholder="New Note..."></input>
        <button>
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
