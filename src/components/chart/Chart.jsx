import { ArrowForwardOutlined } from "@mui/icons-material";
import React from "react";
import { LineChart, Line, XAxis, LabelList } from "recharts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./chart.scss";

export default function Chart({ data, title }) {
  const theme = useSelector((state) => state.temperature.theme);

  return (
    <div className="chart">
      <div className="WeatherChart__title">
        <div className="title__header">
          <h2>{title}</h2>
        </div>

        <Link to="/detail" className="link" state={{ detail: { data, title } }}>
          <div className="detailArrow">
            <span>Detalles</span>
            <ArrowForwardOutlined />
          </div>
        </Link>
      </div>
      <div className="chart__Wrapper">
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
    </div>
  );
}
