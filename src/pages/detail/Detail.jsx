import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ChartDetail from "../../components/chartDetail/ChartDetail";
import "./detail.scss";

export default function Detail() {
  const location = useLocation();
  const theme = useSelector((state) => state.temperature.theme);

  return (
    <div
      className="detail"
      style={{ backgroundColor: theme ? "#ffffff" : "#000000" }}
    >
      <div className="detail__wrapper">
        <div className="detail__header">
          <Link to="/">
            <div className="container__arrowBack">
              <ArrowBack />
            </div>
          </Link>
          <div className="titleTime">
            <span>{location.state.detail.title}</span>
          </div>
        </div>
        <div className="detail__chart">
          <ChartDetail
            data={location.state.detail.data}
            title={location.state.detail.title}
          />
        </div>
      </div>
    </div>
  );
}
