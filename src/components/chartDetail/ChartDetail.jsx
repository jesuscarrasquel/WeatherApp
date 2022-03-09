import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, LabelList } from "recharts";
import "./chartDetail.scss";

export default function ChartDetail({ data, title }) {
  const theme = useSelector((state) => state.temperature.theme);

  return (
    <div className="chartDetail">
      <div className="chart__Wrapper">
        <div className="chart__container">
          <div className="title__desc">
            <span>Temperatura</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#e7f708ea">
                <LabelList
                  dataKey="temp"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Sensación térmica</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#e7f708ea">
                <LabelList
                  dataKey={
                    title === "Por días" ? [data.feels_like?.day] : "feels_like"
                  }
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Viento</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#08e7f7ea">
                <LabelList
                  dataKey="wind_speed"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Presión</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#08f76cea">
                <LabelList
                  dataKey="pressure"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Humedad</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#e7f708ea">
                <LabelList
                  dataKey="humidity"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Punto de rocío</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#046be0ea">
                <LabelList
                  dataKey="dew_point"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
        <div className="chart__container">
          <div className="title__desc">
            <span>Indice UV</span>
          </div>
          <div
            className="chart__content"
            style={{ backgroundColor: theme && "#000000" }}
          >
            <LineChart
              width={title === "Por días" ? 1000 : 3000}
              height={300}
              data={data}
            >
              <Line type="monotone" dataKey="temp" stroke="#046be0ea">
                <LabelList
                  dataKey="uvi"
                  position="top"
                  angle="0"
                  stroke="#ffffff"
                />
              </Line>
              <XAxis dataKey="dt" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}
