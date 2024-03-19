import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true, isEditing: false },
  { id: 1, text: "Watch a puppet show", done: false, isEditing: false },
  { id: 2, text: "Lennon Wall pic", done: false, isEditing: false },
];

export default function ToDoList_UseState() {
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = (text) => {
    console.log("handleAddTask clicked");
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
        isEditing: false,
      },
    ]);
  };

  const onChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        return t.id === task.id ? { ...t, done: !t.done } : t;
      })
    );
  };

  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const onEditTask = (task, event) => {
    console.log("onEditTask");
    console.log(task);
    console.log(event);
    setTasks(
      tasks.map((t) => {
        return t.id === task.id ? task : t;
      })
    );
  };

  console.log("new task added: ");
  console.log(tasks);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={onChangeTask}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </>
  );
}
