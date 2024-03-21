import React, { useState } from "react";

let nextId = 3;

export const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask({
            id: nextId++,
            text: text,
            done: false,
            isEditing: false,
          });
        }}
      >
        Add
      </button>
    </>
  );
};
