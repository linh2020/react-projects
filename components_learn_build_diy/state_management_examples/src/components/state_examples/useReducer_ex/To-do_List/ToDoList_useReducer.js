import React, { useReducer } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

// let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true, isEditing: false },
  { id: 1, text: "Watch a puppet show", done: false, isEditing: false },
  { id: 2, text: "Lennon Wall pic", done: false, isEditing: false },
];

const reducerFunc = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, action.task];
    }
    case "changed": {
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.taskId);
    }
    case "edited": {
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export const ToDoList_useReducer = () => {
  const [tasks, dispatch] = useReducer(reducerFunc, initialTasks);

  const onAddTask = (task) => {
    dispatch({
      type: "added",
      task: task,
    });
  };

  const onChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const onDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      taskId: taskId,
    });
  };

  const onEditTask = (task) => {
    dispatch({
      type: "edited",
      task: task,
    });
  };

  console.log(tasks);

  return (
    <>
      <h1>Prague itinerary - ToDoList_useReducer()</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={onChangeTask}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </>
  );
};
