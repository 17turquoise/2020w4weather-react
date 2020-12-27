import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <ul>
        <li>Few clouds</li>
        <li>Humidity: 76 %</li>
        <li>Wind: 2 km/h</li>
        <li>Visibility: 10 km</li>
      </ul>
    </div>
  );
}
