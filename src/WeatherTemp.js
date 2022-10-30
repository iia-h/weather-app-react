import React, { useState } from "react";

export default function WeatherTemp(props) {
   const [unit, setUnit] = useState("celsius");
   function showFahrenheit(event) {
     event.preventDefault();
     setUnit("fahrenheit");
   }
   function showCelsius(event) {
   event.preventDefault();
   setUnit("celsius");
   }
   
   function fahrenheit() {
      return (props.celsius * 9) / 5 + 32;
   }

   if (unit === "celsius") {
      return (
        <div className="d-flex flex-row align-items-baseline">
          <div className="main-temp" id="temp">
            {Math.round(props.celsius)}
          </div>
          <span className="main-temp">°</span>
          <div className="d-flex flex-row units">
            <a href="/" id="celsius" className="active">
              C
            </a>
            <span>|</span>
            <a href="/" id="fahrenheit" onClick={showFahrenheit}>
              F
            </a>
          </div>
        </div>
      );
   } else {
      return (
        <div className="d-flex flex-row align-items-baseline">
          <div className="main-temp" id="temp">
            {Math.round(fahrenheit())}
          </div>
          <span className="main-temp">°</span>
          <div className="d-flex flex-row units">
            <a href="/" id="celsius" onClick={showCelsius}>
              C
            </a>
            <span>|</span>
            <a href="/" id="fahrenheit" className="active">
              F
            </a>
          </div>
        </div>
      );
   }
     
}
