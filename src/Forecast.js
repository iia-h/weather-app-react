// import React from "react";
// import axios from "axios";


export default function Forecast(response) {

   return (
     <div className="row text-center">
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Mon</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Tue</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Wen</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Thu</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Fri</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/windy.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
       <div className="col-2 pt-2">
         <div className="weather-forecast-day">Sat</div>
         <img
           src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
           className="weather-icon"
         />
         <div className="weather-forecast-temperatures">
           <span className="weather-forecast-temperature weather-forecast-temperature-max">
             25°
           </span>
           <span className="weather-forecast-temperature weather-forecast-temperature-min">
             13°
           </span>
         </div>
       </div>
     </div>
   );


}

