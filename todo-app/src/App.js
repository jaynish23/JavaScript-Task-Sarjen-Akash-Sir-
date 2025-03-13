import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoLocalClass from './TodoLocalClass';
import TodoLocalFunction from './TodoLocalFunction';
import TodoClass from './TodoClass';
import TodoFunction from './TodoFunction';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/todo-class">Todo Class</Link>
            </li>
            <li>
              <Link to="/todo-function">Todo Function</Link>
            </li>
            <li>
              <Link to="/todo-local-class">Todo Local Class</Link>
            </li>
            <li>
              <Link to="/todo-local-function">Todo Local Function</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo-class" element={<TodoClass />} />
          <Route path="/todo-function" element={<TodoFunction />} />
          <Route path="/todo-local-class" element={<TodoLocalClass />} />
          <Route path="/todo-local-function" element={<TodoLocalFunction />} />
          
          <Route path="/" element={<h2>Welcome to the Todo App! Please select a todo type.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
