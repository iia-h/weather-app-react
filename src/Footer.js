// import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="col-12 p-2 text-center bottom-item">
      <a
        href="https://github.com/iia-h/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        Open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://stellar-squirrel-aa326f.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        hosted on Netlify
      </a>{" "}
      <br />
      Coded by Iia Habaraieva
    </div>
  );
}
