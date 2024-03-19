import React, { useState } from "react";

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
          console.log("Text before setState:", text); // Logging the current state before updating

          setText("");
          
          // In React, setting state with useState is asynchronous. This means that calling setText('') does not immediately update the text state variable. Instead, React queues the state update, and the component's re-rendering occurs with the new state value at some point in the future.
          console.log("Text after setState:", text); // Logging the state immediately after calling setState

          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
};
