import React from "react";
import FormatDate from "./FormatDate";
import FormatDay from "./FormatDay";

export default function WeatherInfo(props) {
   return (
     <div className="top-item shadow-lg rounded-3 p-3 d-flex flex-row align-items-center justify-content-around">
       <div>
         <div className="d-flex flex-row align-items-baseline">
           <div className="main-temp" id="temp">
             {Math.round(props.data.temperature)}
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
         <div id="description">{props.data.description}</div>
         <div className="conditions d-flex justify-content-between">
           <div className="humidity">
             <span>humidity</span> <br />
             <span id="humidity">{props.data.humidity}%</span>
           </div>
           <div className="wind">
             <span>wind</span> <br />
             <span id="wind">{Math.round(props.data.wind)}km/h</span>
           </div>
         </div>
       </div>
       <img
         id="icon"
         className="center-icon"
         alt="Weather Icon"
         src={props.data.imgUrl}
       />
       <div>
         <div className="main-city text-break" id="city">
           {props.data.city}
         </div>
         <div className="date" id="date">
           <FormatDate date={props.data.date} />
         </div>
         <div className="week-day" id="day">
           <FormatDay date={props.data.date} />
         </div>
       </div>
     </div>
   );
}
