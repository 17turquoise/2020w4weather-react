import React from "react";
import "./City.css";
import Search from "./Search";
import Weather from "./Weather";
import Temperature from "./Temperature";
import Hourly from "./Hourly";

export default function City() {
  return (
    <div className="City">
      <Search />
      <h1> Tokyo</h1>
      <p>Last updated: Sunday 22:39</p>
      <div className="row">
        <div className="col-6">
          <Weather />{" "}
        </div>
        <div className="col-6">
          <Temperature />
        </div>
      </div>
      <Hourly />
    </div>
  );
}
