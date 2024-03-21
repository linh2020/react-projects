import React from "react";

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
  let taskContent;

  if (task.isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => onEditTask({ ...task, text: e.target.value })}
        />
        <button
          onClick={() => onEditTask({ ...task, isEditing: !task.isEditing })}
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
          onClick={() => onEditTask({ ...task, isEditing: !task.isEditing })}
        >
          Edit
        </button>
      </>
    );
  }

  console.log("Task");
  console.log(task);

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
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </li>
  );
};
