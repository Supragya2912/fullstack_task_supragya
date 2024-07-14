import React, { useCallback, useState } from "react";
import "./InputTask.css";

interface InputTaskProps {
  onSubmitNote: (note: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({ onSubmitNote }) => {
  const [note, setNote] = useState("");

  const handleAddNote = useCallback(() => {
    onSubmitNote(note && note.trim());
    setNote("");
  }, [note, onSubmitNote]);

  return (
    <>
      <div className="input-task-container">
        <div className="input-group">
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="New Note..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddNote();
              }
            }}
            className="note-input"
          />
          <button onClick={handleAddNote} className="add-button">
            <span className="plus-icon">+</span>
            Add
          </button>
        </div>
        <div>
          <h5>Notes</h5>
        </div>
      </div>
    </>
  );
};
