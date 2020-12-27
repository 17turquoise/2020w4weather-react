import React from "react";
import "./Credit.css";

export default function Credit() {
  return (
    <div className="Credit">
      <small className="credit">
        This project was coded by
        <a
          href="https://www.linkedin.com/in/ina-pae-72800978/"
          target="”_blank”"
        >
          Ina Pae
        </a>
        and is
        <a
          href="https://github.com/17turquoise/2020w4weather-react"
          target="”_blank”"
        >
          open-sourced on GitHub
        </a>
        and hosted on
        <a
          href="https://app.netlify.com/sites/brave-ardinghelli-16d308/overview"
          target="”_blank”"
        >
          Netlify.
        </a>
      </small>
    </div>
  );
}
