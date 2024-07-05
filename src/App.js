import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [colonVisible, setColonVisible] = useState(true);

  const [savedTimes, setSavedTimes] = useState([]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setHours(String(now.getHours()).padStart(2, "0"));
      setMinutes(String(now.getMinutes()).padStart(2, "0"));
      setSeconds(String(now.getSeconds()).padStart(2, "0"));
      setColonVisible((prev) => !prev);
    };
    const intervalId = setInterval(updateClock, 1000); //Run the above function every 1 second
    updateClock(); //Run the above function initially for first time
    return () => clearInterval(intervalId);
  }, []);

  const saveTime = () => {
    setSavedTimes([...savedTimes, { hour: hours, minute: minutes, second: seconds }]);
  };
  return (
    <div className="App">
      <div className="row d-flex content-align-center align-items-center vh-100">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 px-5">
          <div className="card p-4 shadow-lg">
            <div className="row">
              <div className="col">
                <p className="fst-italic">This Clock uses Effects Hook</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1 className="display-1">
                  {hours}
                  {colonVisible ? ":" : " "}
                  {minutes}
                </h1>
              </div>
            </div>
            <div>
              <div className="col">
                <button
                  className="btn btn-outline-success"
                  style={{ width: "100%" }}
                  onClick={saveTime}
                >
                  Click to add Timer
                </button>
              </div>
            </div>
          </div>
          <div className="card p-2 shadow-lg bg-success">
            <div className="row m-0">
              <div className="col">
                <h1 className="fw-light text-white card-title px-1">
                  Your Saved Times
                  <hr />
                </h1>
              </div>
            </div>
            <div className="row m-0">
              <div className="col">
                <table
                  className="table table-body"
                  style={{ overFlow: "none", borderRadius: "20px" }}
                >
                  <tbody>
                    {savedTimes.map((savedTime, index) => (
                      <tr key={index}>
                        <td>
                          {savedTime.hour}:{savedTime.minute}:{savedTime.second}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
