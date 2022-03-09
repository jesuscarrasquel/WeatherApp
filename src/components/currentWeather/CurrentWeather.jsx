import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import getUserTemperatureByCoordinates from "../../utils/Utils";
import "./currentWeather.scss";
import cloudyImg from "../../assets/img/cloudy.jpg";
import lluviaFirst from "../../assets/img/lluviafirst.jpg";
import lluviaSecond from "../../assets/img/lluviasecond.jpg";
import nubladoFirst from "../../assets/img/nubladofirst.jpg";
import nubladoThird from "../../assets/img/nubladothird.jpg";
import nubladoFourth from "../../assets/img/nubladofourth.jpg";
import nubladoFifth from "../../assets/img/nubladofifth.jpg";
import soleadoFirst from "../../assets/img/soleadofirst.jpg";
import soleadoSecond from "../../assets/img/soleadosecond.jpg";
import cielodespejadonocturno from "../../assets/img/cielodespejadonocturno.jpg";
import cielodespejadonocturnosecond from "../../assets/img/cielodespejadonocturnosecond.jpg";

export default function CurrentWeather() {
  const location = useSelector((state) => state.location.location);
  const temperature = useSelector((state) => state.temperature.temperature);
  const dispatch = useDispatch();

  const arrCloudy = [
    cloudyImg,
    nubladoFirst,
    nubladoThird,
    nubladoFourth,
    nubladoFifth,
  ];
  const arrRain = [lluviaFirst, lluviaSecond];
  const arrSun = [soleadoFirst, soleadoSecond];
  const arrNight = [cielodespejadonocturno, cielodespejadonocturnosecond];
  const [backImage, setBackImage] = useState();
  moment.locale("es");
  const time = temperature.current?.dt;
  const date = moment(new Date(time * 1000)).format("LLLL");

  // Temperatura en la localidad del usuario.
  useEffect(() => {
    getUserTemperatureByCoordinates(dispatch);
  }, []);

  // Manejo de la imagen de fondo
  useEffect(() => {
    if (temperature.current.weather[0].main === "Clouds") {
      setBackImage(arrCloudy[Math.floor(Math.random() * arrCloudy.length)]);
    } else if (temperature.current.weather[0].main === "Rain") {
      setBackImage(arrRain[Math.floor(Math.random() * arrRain.length)]);
    } else if (temperature.current.weather[0].main === "Clear") {
      setBackImage(arrSun[Math.floor(Math.random() * arrRain.length)]);
    }
  }, [temperature]);

  return (
    <div
      className="currentWeather"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 100%),url(${backImage})`,
      }}
    >
      <div className="home__currentInfo__container">
        <div className="current__temperature">
          <h1>{Math.round(temperature.current?.temp)}</h1>
          <span>°C</span>
        </div>
        <div className="weather__container">
          <img
            src={`http://openweathermap.org/img/w/${temperature.current?.weather[0].icon}.png`}
            alt=""
          />
          <span>{temperature.current?.weather[0].description}</span>
        </div>
        <div className="location__container">
          <span>{`${location.name}, ${location.country}`}</span>
        </div>
        <div className="date__container">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
