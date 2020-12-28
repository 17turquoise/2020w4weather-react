import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div class="row">
        <img
          src="http://openweathermap.org/img/wn/02n@2x.png"
          alt="mainWeather"
          class="float-left"
        />
        <div class="float-left">
          <strong>11 </strong>
          <span className="units">
            <span class="active">˚C</span> |<span>˚F</span>
          </span>
        </div>
      </div>
    </div>
  );
}
