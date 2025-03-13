import React, { useState } from "react";
import './style.css';

const TodoFunction = () => {
  const [task, setTask] = useState(""); 
  const [tasksList, setTasksList] = useState([]); 

  const onChange = (e) => {
    setTask(e.target.value);
  };

  // AddTask function 
  const onAddTask = () => {
    if (task !== "") {
      const newTask = {
        id: Math.random(), 
        value: task, 
      };
      setTasksList([...tasksList, newTask]);
      setTask("");
    }
  };

  // deleteItem function 
  const deleteItem = (id) => {
    const updatedList = tasksList.filter((item) => item.id !== id);
    setTasksList(updatedList); // Update tasksList
  };

  // editItem function 
  const editItem = (id) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = tasksList.map((todo) =>
        todo.id === id 
      ?
       { ...todo, value: editedTodo } 
       :
        todo
      );
      setTasksList(updatedTodos); // Update tasksList with the edited task
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={task}
      />
      <button onClick={onAddTask}>Add Task</button>

      
      {tasksList.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.value}</li>
          <button onClick={() => deleteItem(todo.id)}>Delete</button>
          <button onClick={() => editItem(todo.id)}>Edit</button>
        </ul>
      ))}
    </>
  );
};

export default TodoFunction;
