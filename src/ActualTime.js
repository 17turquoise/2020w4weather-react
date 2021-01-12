import React from "react";

export default function ActualTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let timePeriod;
  if (hours < 12) {
    timePeriod = "a.m.";
  } else {
    timePeriod = "p.m.";
  }

  return (
    <div className="ActualTime">
      Last updated: {day} {hours}:{minutes} {timePeriod}
    </div>
  );
}
