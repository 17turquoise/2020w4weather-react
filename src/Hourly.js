import React from "react";
import "./Hourly.css";

export default function Hourly() {
  return (
    <div className="Hourly">
      <h3>Hourly</h3>
      <div className="row">
        <div className="col-2">
          <p>00:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>11˚/ 11˚</p>
        </div>
        <div className="col-2">
          <p>03:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>11˚/ 11˚</p>
        </div>
        <div className="col-2">
          <p>06:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>11˚/ 11˚</p>
        </div>
        <div className="col-2">
          <p>09:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>11˚/ 11˚</p>
        </div>
        <div className="col-2">
          <p>12:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>15˚/ 11˚</p>
        </div>
        <div className="col-2">
          <p>15:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>14˚/ 11˚</p>
        </div>
      </div>
    </div>
  );
}
