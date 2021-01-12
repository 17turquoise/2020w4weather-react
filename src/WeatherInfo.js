import React from "react";
import ActualTime from "./ActualTime";
import ActualDate from "./ActualDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>

      <h2>
        <ActualTime date={props.data.date} />
      </h2>
      <h3>
        <ActualDate date={props.data.date} />
      </h3>

      <div className="row">
        <div className="col">
          <ul>
            <li className="text-capitalize">
              Condition : {props.data.description}
            </li>
            <li>Humidity : {props.data.humidity} %</li>
            <li>Visibility : {props.data.visibility} km</li>
            <li>Wind : {Math.round(props.data.wind)} km/h</li>
          </ul>{" "}
        </div>

        <div className="col">
          <div className="row">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
