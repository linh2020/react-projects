import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true, isEditing: false },
  { id: 1, text: "Watch a puppet show", done: false, isEditing: false },
  { id: 2, text: "Lennon Wall pic", done: false, isEditing: false },
];

export default function ToDoList_useReducer() {
  const [tasks, setTasks] = useState(initialTasks);

  const onEditTask = (action, task) => {
    switch (action) {
      case "add":
        setTasks([...tasks, task]);
        break;
      case "complete":
      case "edit":
      case "save":
      case "update":
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        break;
      case "delete":
        setTasks(tasks.filter((t) => t.id !== task.id));
        break;
      default:
        throw new Error();
    }
  };

  console.log("tasks clicked");
  console.log(tasks);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onEditTask={onEditTask} />
      <TaskList tasks={tasks} onEditTask={onEditTask} />
    </>
  );
}
