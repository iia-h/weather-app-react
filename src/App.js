// import React from "react";
import "./App.css";

import Forecast from "./Forecast";
import TopElement from "./TopElement";
import SearchForm from "./SearchForm";
import Cities from "./Cities";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-main d-flex flex-column">
      <TopElement />
      <div className="bottom-item shadow-lg rounded-3 px-4 py-3">
        <div className="row">
          <Cities />
          <div className="col-10" id="forecast">
            <Forecast />
          </div>
          <SearchForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
