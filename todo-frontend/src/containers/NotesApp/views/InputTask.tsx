
import React, { useCallback, useState } from "react";

interface InputTaskProps {
  onSubmitNote: (note: string) => void;
};

export const InputTask: React.FC<InputTaskProps> = ({ onSubmitNote }) => {

  const [note, setNote] = useState("");

  const handleAddNote = useCallback(() => {
    onSubmitNote(note && note.trim());
    setNote("");
  }, [note, onSubmitNote]);

  return (
    <>
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
      ></input>
      <button onClick={handleAddNote}>
        <span className="plus-icon">+</span>
        Add
      </button>
    </>
  );
};
