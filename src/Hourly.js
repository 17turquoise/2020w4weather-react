import React from "react";
import "./Hourly.css";

export default function Hourly() {
  return (
    <div className="Hourly">
      <h3>
        <strong>Hourly</strong>
      </h3>
      <div className="row">
        <div className="col-2">
          <p>00:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>11˚</strong>/ 11˚
          </p>
        </div>
        <div className="col-2">
          <p>03:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>10˚</strong>/ 10˚
          </p>
        </div>
        <div className="col-2">
          <p>06:00</p>
          <img
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>9˚</strong>/ 9˚
          </p>
        </div>
        <div className="col-2">
          <p>09:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>10˚</strong>/ 10˚
          </p>
        </div>
        <div className="col-2">
          <p>12:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>13˚</strong>/ 13˚
          </p>
        </div>
        <div className="col-2">
          <p>15:00</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="hourlyWeather"
          />
          <p>
            <strong>14˚</strong>/ 14˚
          </p>
        </div>
      </div>
    </div>
  );
}
