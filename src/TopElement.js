import React, { useState } from "react";
import axios from "axios";

import "./TopElement.css";

export default function TopElement(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: "October 23, 2022",
      day: "Sunday",
      time: "14:45",
      imgUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="top-item shadow-lg rounded-3 p-3 d-flex flex-row align-items-center justify-content-around">
        <div>
          <div className="d-flex flex-row align-items-baseline">
            <div className="main-temp" id="temp">
              {Math.round(weatherData.temperature)}
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
              <span id="wind">{Math.round(weatherData.wind)}km/h</span>
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
  } else {
    let apiKey = "a8b50414c10fo2c501tb709f3e5ed10a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading ..</p>;
  }
}
