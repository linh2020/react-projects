import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(() =>
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(localStorage.getItem("todos"));
  }, [todos]);

  console.log(typeof todos);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    // console.log(todos);
  };

  const toggleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodoButton = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );

  const editTodoContent = (id, content) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: content, completed: false } : todo
      )
    );

  useEffect(() => console.log(todos), [todos]);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodoButton={editTodoButton}
          editTodoContent={editTodoContent}
        />
      ))}
    </div>
  );
};
