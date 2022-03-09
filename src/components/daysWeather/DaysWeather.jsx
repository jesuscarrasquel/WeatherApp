import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Chart from "../chart/Chart";
import "./daysWeather.scss";

export default function DaysWeather() {
  const [data, setData] = useState([]);
  const temperature = useSelector((state) => state.temperature.temperature);
  const theme = useSelector((state) => state.temperature.theme);
  moment.locale("es");
  useEffect(() => {
    const newArr = temperature.daily?.map((item) => {
      const temp = Math.round(parseInt(item.temp.day, 10));

      const tempTime = moment(new Date(item.dt * 1000)).format("dddd. DD");

      return { ...item, dt: tempTime, temp };
    });
    setData(newArr);
  }, [temperature]);
  return (
    <div
      className="daysWeather"
      style={{ backgroundColor: theme ? "#ffffff" : "#000000" }}
    >
      <div className="daysWeather__wrapper">
        <div className="daysWeather__temperature__container">
          <Chart
            data={data}
            datakey={temperature.daily?.temp}
            title="Por días"
          />
        </div>
      </div>
    </div>
  );
}
