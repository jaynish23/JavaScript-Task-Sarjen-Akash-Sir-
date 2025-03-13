import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecord = ({ setRecords }) => {
  const { id } = useParams(); // Get the id from the URL
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const record = records.find(record => record.id === id);
    if (record) {
      setFormData(record);
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.name.trim().length < 2) {
      setError({ name: 'Name must be at least 2 characters long.' });
      return;
    }

    const records = JSON.parse(localStorage.getItem('records')) || [];
    const updatedRecords = records.map(record =>
      record.id === id ? { ...formData, id } : record
    );

    localStorage.setItem('records', JSON.stringify(updatedRecords));

    setRecords(updatedRecords); // Update the state of the parent (App.js)

    navigate('/display'); // Redirect back to display page
  };

  return (
    <div>
      <h2>Edit Record</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInput} 
          placeholder="Enter name" 
        />
        {error.name && <p>{error.name}</p>}
        <input 
          type="text" 
          name="gender" 
          value={formData.gender} 
          onChange={handleInput} 
          placeholder="Enter gender" 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInput} 
          placeholder="Enter email" 
        />
        <input 
          type="text" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleInput} 
          placeholder="Enter mobile" 
        />
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleInput} 
          placeholder="Enter password" 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecord;
