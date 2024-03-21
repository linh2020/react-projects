import React, { useState } from "react";

export const TaskList = ({ tasks, onChangeTask, onDeleteTask, onEditTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
};

const Task = ({ task, onChangeTask, onDeleteTask, onEditTask }) => {
  const [text, setText] = useState(task.text);

  let taskContent;

  if (task.isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => onEditTask({ ...task, text: text, isEditing: false })}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => onEditTask({ ...task, isEditing: true })}>
          Edit
        </button>
      </>
    );
  }

  // console.log("Task");
  // console.log(task);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          onChangeTask({ ...task, done: !task.done });
        }}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};
