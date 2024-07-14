import React from "react";
import "./NotesApp.css";
import useNotes from "./hooks/useNotes";
import { InputTask } from "./views/InputTask";
import { ListTask } from "./views/ListTask";

const Notes: React.FC = () => {
  const { onSubmitNote, tasks } = useNotes();

  return (
    <div className="container">
      <div className="header">
        <h1>Note App</h1>
      </div>
      <div>
        <InputTask onSubmitNote={onSubmitNote} />
      </div>
      <div>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <div>
              <ListTask key={task.contentId} name={task.content} />
              <hr/>
            </div>
          ))
        ) : (
          <div>
            <p>No notes available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
