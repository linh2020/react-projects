import React, { useState } from "react";

let nextId = 3;

export default function AddTask({ onEditTask }) {
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
          let action = "add";
          let task = {
            id: nextId++,
            text: text,
            done: false,
            isEditing: false,
          };
          setText("");
          onEditTask(action, task);
        }}
      >
        Add
      </button>
    </>
  );
}
