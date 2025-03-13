import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecord = ({ setRecords }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

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

    const existingRecords = JSON.parse(localStorage.getItem('records')) || [];
    const newRecord = { ...formData, id: Math.random().toString(36).substr(2, 9) };
    existingRecords.push(newRecord);
    localStorage.setItem('records', JSON.stringify(existingRecords));

    setRecords(existingRecords);  

    navigate('/display'); 
  };

  return (
    <div>
      <h2>Add New Record</h2>
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
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default AddRecord;
