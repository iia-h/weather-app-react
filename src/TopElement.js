import React, { useState } from "react";
import FormatDate from "./FormatDate";
import FormatDay from "./FormatDay";
import axios from "axios";

import "./TopElement.css";

export default function TopElement(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      imgUrl: `../images/${response.data.weather[0].icon}.png`,
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
            <FormatDate date={weatherData.date} />
          </div>
          <div className="week-day" id="day">
            <FormatDay date={weatherData.date} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ca3de197620a1521a455c4239b865368";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading ..</p>;
  }
}
