import React from "react";
import { useSelector } from "react-redux";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import HoursWeather from "../../components/hoursWeather/HoursWeather";
import DaysWeather from "../../components/daysWeather/DaysWeather";
import "./home.scss";
import Spinner from "../../components/spinner/Spinner";

export default function Home() {
  const loadingTemperature = useSelector((state) => state.temperature.loading);
  const loadingLocation = useSelector((state) => state.location.loading);
  return (
    <div className="home">
      {loadingTemperature || (loadingLocation && <Spinner />)}
      <div className="home__wrapper">
        <CurrentWeather />
        <HoursWeather />
        <DaysWeather />
      </div>
    </div>
  );
}
