import React, { useState } from "react";
import "./City.css";
import WeatherInfo from "./WeatherInfo";

import Hourly from "./Hourly";
import axios from "axios";
import { Form } from "react-bootstrap";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      visibility: response.data.visibility / 1000,
    });
  }
  function search() {
    let apiKeys = "7dc7836f71a474945c8b68b188f0066c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="City">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City...:)"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>{" "}
          </div>
        </Form>

        <WeatherInfo data={weatherData} />
        <Hourly />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
