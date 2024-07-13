import React from "react";

interface ListTaskProp {
  name: string;
}

export const ListTask: React.FC<ListTaskProp> = ({ name }) => {
  return (
    <div>
      <div className="note-item">{name}</div>
    </div>
  );
};