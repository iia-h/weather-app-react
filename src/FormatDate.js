import React from "react";

export default function FormatDate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let number = props.date.getDate();
  let year = props.date.getFullYear();

  return (
    <div>
      {month} {number}, {year}
    </div>
  );
}
