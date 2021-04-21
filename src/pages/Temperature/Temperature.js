import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "./../../store/actions";
import styles from "./Temperature.module.scss";
import WeatherData from "./../../components/WeatherData/WeatherData"
import Title from '../../components/UI/Title/Title';
import Search from "./../../components/Search/Search"

const Temperature = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.weather);
    useEffect(() => {
        !state.weatherData.name && dispatch(getWeather());
    }, [])
    return (

        <section className={styles.Temperature}>
            <Search/>

            <Title hasMargin underlined title={state.weatherData.name}></Title>
            {state.weatherData.name &&
                <div className={styles.WeatherContainer}>
                    <WeatherData
                        temp={state.weatherData?.data?.temp}
                        humidity={state.weatherData.data.humidity}
                        wind={state.weatherData.wind.speed}
                        min={state.weatherData.data.temp_min}
                        max={state.weatherData.data.temp_max}
                    />
                    {/* <button onClick= {this.handleUpdateClick}className="btn">Actualizar</button> */}
                </div>
            }

        </section>
    )
}

export default Temperature;