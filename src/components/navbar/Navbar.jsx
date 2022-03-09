import React, { useState } from "react";
import { MyLocation, Palette, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { searchLocation } from "../../store/ducks/apiCalls";
import "./navbar.scss";
import getUserTemperatureByCoordinates from "../../utils/Utils";
import { changeTheme } from "../../store/ducks/TemperatureDucks";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const errorLocation = useSelector((state) => state.location.error);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="search__container">
          <div className="icon__container">
            <Search
              className="searchIcon"
              onClick={() => searchLocation(location, dispatch)}
            />
          </div>

          <input
            type="text"
            placeholder="Búsqueda por palabra clave"
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && searchLocation(location, dispatch)
            }
          />
          {errorLocation && (
            <span className="error">
              No se ha encontrado datos de la locación.
            </span>
          )}
        </div>
        <div className="theme__container">
          <Palette
            className="paletteIcon"
            onClick={() => dispatch(changeTheme())}
          />
        </div>
        <div className="mylocation__container">
          <MyLocation
            className="myLocationIcon"
            onClick={() => getUserTemperatureByCoordinates(dispatch)}
          />
        </div>
      </div>
    </div>
  );
}
