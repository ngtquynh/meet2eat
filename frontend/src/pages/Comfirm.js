import { useLocation } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the name and time query parameters
  const name = queryParams.get("name");
  const time = queryParams.get("time");
  let time_slots = {
    "7:00 AM": "Emily",
    "8:00 AM": "David",
    "9:00 AM": "Meredith",
    "10:00 AM": "Sophia",
    "11:00 AM": "Liam",
    "12:00 PM": "Olivia",
    "13:00 PM": "Noah",
    "14:00 PM": "Ava",
    "15:00 PM": "Lucas",
    "16:00 PM": "Emma",
    "17:00 PM": "Jackson",
    "18:00 PM": "Isabella",
    "19:00 PM": "Liam",
    "20:00 PM": "Olivia",
    "21:00 PM": "Benjamin",
    "22:00 PM": "Charlotte",
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center display-1">Confirmation</h1>
          {name && time ? (
            <div>
              <h3 className="card-text text-center display-3">
                Hello {name}, you will have an appointment at {time.slice(0, -3)} with {time_slots[time]}.
              </h3>
            </div>
          ) : (
            <p className="card-text text-center">Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
