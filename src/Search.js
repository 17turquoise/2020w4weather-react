import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <input type="search" placeholder="Enter a city...;)" />
      <button type="submit">Search</button>
    </form>
  );
}
