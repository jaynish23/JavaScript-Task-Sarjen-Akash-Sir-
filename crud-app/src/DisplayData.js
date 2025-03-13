import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayData = ({ setRecords }) => {  // Accept setRecords as a prop
  const [records, setLocalRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setLocalRecords(storedRecords);
  }, []);

  // Use the passed setRecords to update the parent state
  useEffect(() => {
    setRecords(records);  // Whenever records change, we update the parent state.
  }, [records, setRecords]);

  return (
    <div>
      <h2>Display Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.gender}</td>
              <td>{record.email}</td>
              <td>{record.mobile}</td>
              <td>{record.password}</td>
              <td>
                {/* Link to EditRecord with record id */}
                <Link to={`/edit/${record.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
