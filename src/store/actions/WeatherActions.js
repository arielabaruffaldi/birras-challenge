
import * as actionTypes from "./../types";
import axios from "axios";
import { setLoading } from './GeneralActions';

const location = "Buenos Aires,ar"
const api_key = "8eeda937415d0d2411846b67155feaa7"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

export const getWeather = () => async (
    dispatch
) => {
    dispatch(setLoading(true))
    axios
        .get(`${url_base_weather}?q=${location}&appid=${api_key}&units=metric`)
        .then((response) => {
            dispatch(setLoading(false))
            dispatch({
                type: actionTypes.SET_WEATHER_DATA,
                payload: {
                    name: response.data.name,
                    data: {
                        humidity: response.data.main.humidity,
                        temp: response.data.main.temp,
                        temp: Math.round(response.data.main.temp),
                        temp_min: Math.round(response.data.main.temp_min),
                        temp_max: Math.round(response.data.main.temp_max)

                    },
                    wind: response.data.wind,
                    icon: response.data.weather[0].main
                }
            })
        })
        .catch((error) => {
            throw error;
        });
}