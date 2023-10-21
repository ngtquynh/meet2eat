import React, { useState } from 'react';
import Bar from './Bar';
import TimeSlot from './TimeSlot';

const HomePage = () => {
  const [name, setName] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = async () => {
    if (name && selectedTime) {
      const data = { name, time: selectedTime };
      try {
        const response = await fetch('http://localhost:5000/submit-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Data submitted successfully');
        } else {
          console.error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Name and time must be selected');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4 mb-4">meet2eat</h1>
          <Bar onChange={handleNameChange} />
          <TimeSlot onSelectTime={handleSelectTime} />
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
