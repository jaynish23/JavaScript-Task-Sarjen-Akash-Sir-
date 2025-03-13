import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecord from './AddRecord';
import DisplayData from './DisplayData';
import EditRecord from './EditRecord';

function App() {
  const [records, setRecords] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add Record</Link>
            </li>
            <li>
              <Link to="/display">Display Records</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Passing setRecords as a prop */}
          <Route path="/add" element={<AddRecord setRecords={setRecords} />} />
          <Route path="/display" element={<DisplayData setRecords={setRecords} />} />
          <Route path="/edit/:id" element={<EditRecord setRecords={setRecords} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
