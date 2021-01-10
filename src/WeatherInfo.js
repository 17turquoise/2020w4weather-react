import React from "react";
import ActualTime from "./ActualTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>

      <h2>
        <ActualTime date={props.data.date} />
      </h2>

      <div className="row">
        <div className="col-6">
          <ul>
            <li className="text-capitalize">
              Condition: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Visibility: {props.data.visibility} km</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>{" "}
        </div>
        <div className="col-6">
          <div class="row">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              class="float-left"
            />
            <div class="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <span class="active">˚C</span> |<span>˚F</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
