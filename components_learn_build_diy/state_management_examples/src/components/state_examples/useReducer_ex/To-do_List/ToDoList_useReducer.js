import React, { useReducer } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true, isEditing: false },
  { id: 1, text: "Watch a puppet show", done: false, isEditing: false },
  { id: 2, text: "Lennon Wall pic", done: false, isEditing: false },
];

const reducerFunc = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        { id: action.id, text: action.text, done: false, isEditing: false },
      ];
    }
    case "changed": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.task.id);
    }
    case "edited": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export const ToDoList_useReducer = () => {
  const [tasks, dispatch] = useReducer(reducerFunc, initialTasks);

  const onAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  const onChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const onDeleteTask = (task) => {
    dispatch({
      type: "deleted",
      task: task,
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
