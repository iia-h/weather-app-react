import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-main d-flex flex-column">
      <Weather defaultCity="Paris" />
      <Footer />
    </div>
  );
}
