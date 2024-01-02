import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
// State variables for managing the editing state and task content    
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
// Handler to remove a todo
  const handleClick = (e) => {
    remove(e.target.id);
  };
// Handler to toggle between editing and viewing modes
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
// Handler to update a todo
  const handleUpdate = (e) => {
    e.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  // Handler to update the task content in the local state
  const handleChange = (e) => {
    setTask(e.target.value);
  };
// Handler to toggle completion status of a todo  
  const toggleCompleted = (e) => {
    toggleComplete(e.target.id);
  };
 // Conditionally render the todo based on the editing state
  let result;
  if (isEditing) {
  // Render the form for editing a todo   
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
     // Render the todo in view mode
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleClick}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
