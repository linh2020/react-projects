import React from "react";

export default function TaskList({ tasks, onEditTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onEditTask={onEditTask} />
        </li>
      ))}
    </ul>
  );
}

const Task = ({ task, onEditTask }) => {
  let taskContent;

  if (task.isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            let action = "update";
            onEditTask(action, { ...task, text: e.target.value });
          }}
        />
        <button
          onClick={() => {
            let action = "save";
            onEditTask(action, { ...task, isEditing: false });
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            let action = "edit";
            onEditTask(action, { ...task, isEditing: true });
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          let action = "complete";
          onEditTask(action, { ...task, done: !task.done });
        }}
      />

      {taskContent}

      <button
        onClick={() => {
          let action = "delete";
          onEditTask(action, task);
        }}
      >
        Delete
      </button>
    </label>
  );
};
