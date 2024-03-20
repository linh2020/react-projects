import React from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  let taskContent;

  if (task.isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({ ...task, text: e.target.value });
          }}
        />
        <button
          onClick={() => {
            onChangeTask({ ...task, isEditing: false });
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
            onChangeTask({ ...task, isEditing: true });
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
          onChangeTask({ ...task, done: !task.done });
        }}
      />

      {taskContent}

      <button
        onClick={() => {
          onDeleteTask(task.id);
        }}
      >
        Delete
      </button>
    </label>
  );
};
