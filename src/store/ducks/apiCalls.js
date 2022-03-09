import {
  locationFailure,
  locationLoading,
  locationSuccess,
} from "./LocationDucks";
import {
  temperatureFailure,
  temperatureLoading,
  temperatureSuccess,
} from "./TemperatureDucks";
import publicRequest from "../../config/RequestMethods";

export const getTemperature = async (data, dispatch) => {
  dispatch(temperatureLoading());
  try {
    const response = await publicRequest.get("data/2.5/onecall", {
      params: {
        lat: data.lat,
        lon: data.lon,
        lang: "es",
        units: "metric",
        appid: process.env.APPID,
      },
    });
    dispatch(temperatureSuccess(response.data));
  } catch (error) {
    dispatch(temperatureFailure());
  }
};

export const searchLocation = async (data, dispatch) => {
  dispatch(locationLoading());
  try {
    const response = await publicRequest.get("geo/1.0/direct", {
      params: { q: data, appid: process.env.APPID },
    });

    getTemperature(
      { lat: response.data[0].lat, lon: response.data[0].lon },
      dispatch
    );

    dispatch(
      locationSuccess({
        lat: response.data[0].lat,
        lon: response.data[0].lon,
        name: response.data[0].name,
        country: response.data[0].country,
      })
    );
  } catch (error) {
    dispatch(locationFailure());
  }
};

export const searchLocationByCoordinates = async (data, dispatch) => {
  dispatch(locationLoading());
  try {
    const response = await publicRequest.get("geo/1.0/reverse", {
      params: { lat: data.lat, lon: data.lon, appid: process.env.APPID },
    });
    dispatch(
      locationSuccess({
        lat: response.data[0].lat,
        lon: response.data[0].lon,
        name: response.data[0].name,
        country: response.data[0].country,
      })
    );
  } catch (error) {
    dispatch(locationFailure());
  }
};
