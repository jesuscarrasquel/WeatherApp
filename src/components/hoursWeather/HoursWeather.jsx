import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import "./hoursWeather.scss";
import Chart from "../chart/Chart";

export default function HoursWeather() {
  const [data, setData] = useState([]);
  const temperature = useSelector((state) => state.temperature.temperature);
  const theme = useSelector((state) => state.temperature.theme);
  moment.locale("es");

  useEffect(() => {
    const newArr = temperature.hourly?.map((item) => {
      const time = moment(new Date(item.dt * 1000)).format("LT");
      const temp = Math.round(item.temp);
      return { ...item, dt: time, temp };
    });
    setData(newArr);
  }, [temperature]);

  return (
    <div
      className="hoursWeather"
      style={{ backgroundColor: theme ? "#ffffff" : "#000000" }}
    >
      <div className="hoursWeather__wrapper">
        <div className="hoursWeather__temperature__container">
          <Chart
            data={data}
            datakey={temperature.hourly?.temp}
            title="Por horas"
          />
        </div>
      </div>
    </div>
  );
}
