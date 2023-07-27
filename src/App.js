import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { userData } from "./helpers";
import { Button } from "reactstrap";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const { username } = userData();
  const isLoggedIn = !!username; // Check if username exists

  return (
    <>
      <Router>
        {location.pathname !== "/login" && location.pathname !== "/registration" && <CustomNav />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                isLoggedIn={isLoggedIn}
                username={username}
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

const Home = ({
  data,
  isLoggedIn,
  username,
  location,
  setLocation,
  searchLocation,
}) => {
  return (
    <div className="home">
      <div className="welcome-container">
        {isLoggedIn && <h2>Welcome, {username}!</h2>}
        {!isLoggedIn && (
          <Button color="primary" href="/login">
            Login
          </Button>
        )}
      </div>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{Math.round(data.main.feels_like)}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{Math.round(data.wind.speed)} m/s</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;