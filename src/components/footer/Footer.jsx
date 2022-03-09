import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

export default function Footer() {
  const theme = useSelector((state) => state.temperature.theme);

  return (
    <div
      className="footer"
      style={{ backgroundColor: theme ? "#ffffff" : "#000000" }}
    >
      <div className="wrapper__container">
        <div className="title__container">
          <span>Weather App</span>
        </div>
        <div className="autor__container">
          <span>Developed by Jesus Carrasquel</span>
        </div>
      </div>
    </div>
  );
}
