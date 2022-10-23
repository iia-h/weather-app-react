// import React from "react";

export default function SearchForm() {
  return (
    <div className="col-sm-12 search-form">
      <form className="row" id="city-form">
        <div className="mb-3 col-sm-8 ">
          <input
            type="text"
            placeholder="Enter a city"
            className="form-control"
            id="city-input"
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
          >
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
