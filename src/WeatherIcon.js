import React from "react";
import CLEAR_DAY from "./images/01d.png";
import CLEAR_NIGHT from "./images/01n.png";
import PARTLY_CLOUDY_DA from "./images/02d.png";
import PARTLY_CLOUDY_NIGHT from "./images/02n.png";
import CLOUDY from "./images/03d.png";
import RAIN from "./images/09d.png";
import PARTLY_CLOUDY_DR from "./images/10d.png";
import PARTLY_CLOUDY_NR from "./images/10n.png";
import THUNDETSTORMS_DAY from "./images/11d.png";
import THUNDETSTORMS_NIGHT from "./images/11n.png";
import SNOW_DAY from "./images/13d.png";
import SNOW_NIGHT from "./images/13n.png";
import FOG from "./images/50d.png";


export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": CLEAR_DAY,
    "01n": CLEAR_NIGHT,
    "02d": PARTLY_CLOUDY_DA,
    "02n": PARTLY_CLOUDY_NIGHT,
    "03d": CLOUDY,
    "03n": CLOUDY,
    "04d": CLOUDY,
    "04n": CLOUDY,
    "09d": RAIN,
    "09n": RAIN,
    "10d": PARTLY_CLOUDY_DR,
    "10n": PARTLY_CLOUDY_NR,
    "11d": THUNDETSTORMS_DAY,
    "11n": THUNDETSTORMS_NIGHT,
    "13d": SNOW_DAY,
    "13n": SNOW_NIGHT,
    "50d": FOG,
    "50n": FOG,
  };

  return (
    <img src={codeMapping[props.code]} alt={props.alt} width={props.size} />
  );
}
