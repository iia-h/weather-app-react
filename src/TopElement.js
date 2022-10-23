// import React from "react";
// import axios from "axios";

import "./TopElement.css";

export default function TopElement() {
  let weatherData = {
    temperature: 27,
    description: "Sunny",
    humidity: 60,
    wind: 8,
    city: "Dnipro",
    date: "October 23, 2022",
    day: "Sunday",
    time: "14:45",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="top-item shadow-lg rounded-3 p-3 d-flex flex-row align-items-center justify-content-around">
      <div>
        <div className="d-flex flex-row align-items-baseline">
          <div className="main-temp" id="temp">
            {weatherData.temperature}
          </div>
          <span className="main-temp">°</span>
          <div className="d-flex flex-row units">
            <a href="#" id="celsius" className="active">
              C
            </a>
            <span>|</span>
            <a href="#" id="fahrenheit">
              F
            </a>
          </div>
        </div>
        <div id="description">{weatherData.description}</div>
        <div className="conditions d-flex justify-content-between">
          <div className="humidity">
            <span>humidity</span> <br />
            <span id="humidity">{weatherData.humidity}%</span>
          </div>
          <div className="wind">
            <span>wind</span> <br />
            <span id="wind">{weatherData.wind}km/h</span>
          </div>
        </div>
      </div>
      <img
        id="icon"
        className="center-icon"
        alt="Weather Icon"
        src={weatherData.imgUrl}
      />
      <div>
        <div className="main-city text-break" id="city">
          {weatherData.city}
        </div>
        <div className="date" id="date">
          {weatherData.date}
        </div>
        <div className="week-day" id="day">
          {weatherData.day}
        </div>
        <div className="week-day" id="time">
          {weatherData.time}
        </div>
      </div>
    </div>
  );
}
