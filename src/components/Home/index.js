import React, { useState } from "react";
import CustomNav from "../CustomNav";
import { userData } from "../../helpers";
import { Button } from "reactstrap";

const Home = () => {
  const { username } = userData();
  const isLoggedIn = !!username; // Check if username exists
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  };

  const fetchWeatherData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    setLocation("");
  };

  const handleMusicToggle = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      <CustomNav />
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
                {data.main ? (
                  <h1>{Math.round(data.main.temp)}°C</h1>
                ) : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].description}</p> : null}
              </div>
            </div>

            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">
                      {Math.round(data.main.feels_like)}°C
                    </p>
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
    </>
  );
};

export default Home;
