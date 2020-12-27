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
            <a hfer="#top" id="celsius-link" class="active">
              ˚C
            </a>{" "}
            |
            <a hfer="#top" id="fahrenheit-link">
              ˚F
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
