import React from "react";

export const TaskList = ({ tasks, onChangeTask, onDeleteTask, onEditTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task
              task={task}
              onChangeTask={onChangeTask}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </li>
        );
      })}
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
          onChange={(event) => {
            onEditTask({
              ...task,
              text: event.target.value,
            });
          }}
        />
        <button
          onClick={(event) => {
            onEditTask({ ...task, isEditing: !task.isEditing });
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
          onClick={(event) => {
            onEditTask({ ...task, isEditing: !task.isEditing });
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
          onChangeTask(task);
        }}
      />

      {taskContent}

      <button
        onClick={() => {
          onDeleteTask(task);
        }}
      >
        Delete
      </button>
    </label>
  );
};
