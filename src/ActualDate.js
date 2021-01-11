import React from "react";

export default function ActualDate(props) {
  let date = props.date.getDate();

  let monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthList[props.date.getMonth()];
  let year = props.date.getFullYear();

  return (
    <div className="ActualDate">
      {date} {month} {year}
    </div>
  );
}
