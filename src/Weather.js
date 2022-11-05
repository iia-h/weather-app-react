import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Cities from "./Cities";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "ca3de197620a1521a455c4239b865368";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    // search for a city
  }

   function handleCityChange(event) {
     event.preventDefault();
    setCity(event.target.value);
   }
   
   function currentLocation(location) {
    let apiKey = "ca3de197620a1521a455c4239b865368";
     let lat = location.coords.latitude;
     let lon = location.coords.longitude;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
   }

   function showCurrentLocation(event) {
     event.preventDefault();
     navigator.geolocation.getCurrentPosition(currentLocation);
   }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <WeatherInfo data={weatherData} />
        <div className="bottom-item shadow-lg rounded-3 px-4 py-3">
          <div className="row">
            <Cities />
            <div className="col-10" id="forecast">
              <Forecast coordinates={weatherData.coordinates} />
            </div>
          </div>
          <div className="col-sm-12 search-form">
            <form className="row" id="city-form" onSubmit={handleSubmit}>
              <div className="mb-3 col-sm-8 ">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  id="city-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-md-4 button">
                <button
                  type="submit"
                  id="search-btn"
                  className="btn btn-outline-warning"
                >
                  Search
                </button>
                <button
                  type="submit"
                  id="current-btn"
                  className="btn btn-outline-warning"
                  onClick={showCurrentLocation}
                >
                  Current
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading ..</p>;
  }
}
