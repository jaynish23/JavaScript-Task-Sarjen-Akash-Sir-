import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormValidation from "./FormValidation";
import FormValidationLocal from "./FormValidationLocal";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Basic Form Validation</Link>
            </li>
            <li>
              <Link to="/local">Form with Local Storage</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FormValidation />} />
          <Route path="/local" element={<FormValidationLocal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;