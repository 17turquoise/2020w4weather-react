import React, { useState } from "react";
import "./City.css";
import ActualTime from "./ActualTime";
import Search from "./Search";
import Hourly from "./Hourly";
import axios from "axios";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/02n@2x.png",
      visibility: response.data.visibility / 1000,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="City">
        <Search />

        <h1> {weatherData.city}</h1>
        <p>
          <ActualTime date={weatherData.date} />
        </p>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="text-capitalize">
                Condition: {weatherData.description}
              </li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Visibility: {weatherData.visibility} km</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>{" "}
          </div>
          <div className="col-6">
            <div class="row">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                class="float-left"
              />
              <div class="float-left">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">
                  <span class="active">˚C</span> |<span>˚F</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Hourly />
      </div>
    );
  } else {
    let apiKeys = "7dc7836f71a474945c8b68b188f0066c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKeys}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
