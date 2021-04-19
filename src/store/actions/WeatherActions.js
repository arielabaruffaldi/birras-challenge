
import * as actionTypes from "./../types";
import axios from "axios";

const location = "Buenos Aires,ar"
const api_key = "8eeda937415d0d2411846b67155feaa7"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

export const getWeather = () => async (
    dispatch
  ) => {
    axios
    .get( `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`)
    .then((response) => {
        console.log(response.data)
        dispatch({
            type: actionTypes.SET_WEATHER_DATA,
            payload: {
                name: response.data.name,
                data: response.data.main,
                wind: response.data.wind,
                icon: response.data.weather[0].main
            }
        })
    })
    .catch((error) => {
        throw error;
    });
}