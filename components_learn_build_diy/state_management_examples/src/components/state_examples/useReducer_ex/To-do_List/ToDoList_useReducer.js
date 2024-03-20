import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true, isEditing: false },
  { id: 1, text: "Watch a puppet show", done: false, isEditing: false },
  { id: 2, text: "Lennon Wall pic", done: false, isEditing: false },
];

// const tasksReducer = (tasks, action) => {
//   if (action.type === "added") {
//     return [...tasks, { id: action.id, text: action.text, done: false }];
//   } else if (action.type === "changed") {
//     return tasks.map((t) => (t.id === action.task.id ? action.task : t));
//   } else if (action.type === "deleted") {
//     return tasks.filter((t) => t.id !== action.id);
//   } else {
//     throw Error("Unknown action: " + action.type);
//   }
// };

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default function ToDoList_useReducer() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const onAddTask = (text) => {
    dispatch(
      // "action" object:
      {
        type: "added",
        id: nextId++,
        text: text,
      }
    );
  };

  const onChangeTask = (task) => {
    dispatch(
      // "action" object:
      {
        type: "changed",
        task: task,
      }
    );
  };

  const onDeleteTask = (taskId) => {
    dispatch(
      // "action" object:
      {
        type: "deleted",
        id: taskId,
      }
    );
  };

  // const onEditTask = (action, task) => {
  //   switch (action) {
  //     case "add":
  //       setTasks([...tasks, task]);
  //       break;
  //     case "complete":
  //     case "edit":
  //     case "save":
  //     case "update":
  //       setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  //       break;
  //     case "delete":
  //       setTasks(tasks.filter((t) => t.id !== task.id));
  //       break;
  //     default:
  //       throw new Error();
  //   }
  // };

  console.log("tasks clicked");
  console.log(tasks);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={onChangeTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}
