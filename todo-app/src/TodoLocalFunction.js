import React, { useState, useEffect } from "react";
import './style.css';

const TodoLocalFunction = () => {
  const [task, setTask] = useState(""); 
  const [tasksList, setTasksList] = useState([]); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasksListFunction"));
    if (savedTasks) {
      setTasksList(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasksList.length > 0) {
      localStorage.setItem("tasksListFunction", JSON.stringify(tasksList));
    }
  }, [tasksList]);

  const onChange = (e) => {
    setTask(e.target.value);
  };

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

  const deleteItem = (id) => {
    const updatedList = tasksList.filter((item) => item.id !== id);
    setTasksList(updatedList);
  };

  const editItem = (id) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = tasksList.map((todo) =>
        todo.id === id ? { ...todo, value: editedTodo } : todo
      );
      setTasksList(updatedTodos);
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

export default TodoLocalFunction;
