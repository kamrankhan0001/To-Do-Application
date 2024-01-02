import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useState } from 'react';
import uuid from "uuid";

function App() {
 // State for managing the todo list
    const [todos, setTodos] = useState([
      { id: uuid(), task: "task 1", completed: false },
      { id: uuid(), task: "task 2", completed: true }
    ]);
  // Function to add a new todo to the list
    const create = newTodo => {
      console.log(newTodo);
      setTodos([...todos, newTodo]);
    };
  // Function to remove a todo from the list
    const remove = id => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
//Function to update the task of a todo  
    const update = (id, updtedTask) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: updtedTask };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  // Function to toggle the completion status of a todo
    const toggleComplete = id => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  // Mapping over the todos to create a list of Todo components
    const todosList = todos.map(todo => (
      <Todo
        toggleComplete={toggleComplete}
        update={update}
        remove={remove}
        key={todo.id}
        todo={todo}
      />
    ));
  // Rendering the main app component
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple React Todo List App</span>
        </h1>
        <ul>{todosList}</ul>
        <TodoForm createTodo={create} />
        
      </div>
    );
  }

export default App;
