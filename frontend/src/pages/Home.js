import React, { useState } from "react";
import Bar from "./Bar";
import TimeSlot from "./TimeSlot";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
// import DiningHallSelector from "./DiningHallSelector";
// import "./Home.css";
const HomePage = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [name, setName] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
        const response = await fetch("http://localhost:5000/submit-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Data submitted successfully");
          // Use navigate to go to the confirmation page with query parameters
          navigate(`/confirm?name=${name}&time=${selectedTime}`);
        } else {
          console.error("Failed to submit data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Name and time must be selected");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div class="container">
            <div class="jumbotron">
              <h1 class="display-4">meet2eat</h1>
              <p class="lead">Reservation</p>
            </div>
          </div>  
          <Bar onChange={handleNameChange} />
          {/* <DiningHallSelector/> */}
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
