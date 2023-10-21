import React, { useState } from 'react';

function TimeSlot({ onSelectTime }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Function to handle card click
  const handleCardClick = (index) => {
    const selectedTime = `${index + 7}:00 ${index < 5 ? 'AM' : 'PM'}`;
    setSelectedSlot(index);
    onSelectTime(selectedTime); // Call the onSelectTime prop with the selected time
  };

  // Function to render time slot cards
  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let i = 7; i <= 22; i++) {
      const time = `${i % 12 || 12}:00 ${i < 12 ? 'AM' : 'PM'}`;
      timeSlots.push(
        <div
          key={i}
          className={`card ${selectedSlot === i - 7 ? 'bg-primary text-white' : ''}`}
          onClick={() => handleCardClick(i - 7)}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-body">
            <h5 className="card-title">{time}</h5>
          </div>
        </div>
      );
    }
    return timeSlots;
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4">Select Time Availability</h1>
      <div className="row">{renderTimeSlots()}</div>
    </div>
  );
}

export default TimeSlot;
