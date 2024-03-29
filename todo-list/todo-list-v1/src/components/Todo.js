import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodoButton,
  editTodoContent,
}) => {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isEditing ? (
          <input
            className="todo-input-edit"
            type="text"
            value={todo.task}
            onChange={(e) => editTodoContent(todo.id, e.target.value)}
          />
        ) : (
          todo.task
        )}
      </p>
      <div className="todo-features-btn">
        {todo.completed ? <FontAwesomeIcon icon={faCircleCheck} /> : ""}
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodoButton(todo.id)}
        />

        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};
