import React, { useState } from 'react';

const Bar = ({ onChange }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onChange(newName);
  };

  return (
    <div className="container mt-4">
      <h2>Enter your name:</h2>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Bar;
