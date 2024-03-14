import React from "react";
import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belg</p>
        <p className="weather-description">Description</p>
      </div>
      <img alt="weather" className="weather-icon" src="" />
    </div>
  );
};

export default CurrentWeather;
