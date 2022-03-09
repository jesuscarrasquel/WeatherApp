import {
  getTemperature,
  searchLocationByCoordinates,
} from "../store/ducks/apiCalls";

const getUserTemperatureByCoordinates = (dispatch) => {
  const showPosition = (position) => {
    const myPosition = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    getTemperature({ lat: myPosition.lat, lon: myPosition.lon }, dispatch);
    searchLocationByCoordinates(
      { lat: myPosition.lat, lon: myPosition.lon },
      dispatch
    );
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
};

export default getUserTemperatureByCoordinates;
