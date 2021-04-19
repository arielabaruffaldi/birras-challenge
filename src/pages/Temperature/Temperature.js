import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "./../../store/actions";
import styles from "./Temperature.module.scss";
import WeatherData from "./../../components/WeatherData/WeatherData"
import Title from '../../components/UI/Title/Title';


const Temperature = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.weather);
    useEffect(() => {
        dispatch(getWeather());
    }, [])
    console.log(state.weatherData)
    return (

        <section className={styles.Temperature}>
            <Title title={state.weatherData.name}></Title>
            {state.weatherData.name &&
                <div className={styles.WeatherContainer}>
                    <WeatherData
                        temp={state.weatherData?.data?.temp}
                        humidity={state.weatherData.data.humidity}
                        wind={state.weatherData.wind.speed}
                    />
                    {/* <button onClick= {this.handleUpdateClick}className="btn">Actualizar</button> */}
                </div>
            }

        </section>
    )
}

export default Temperature;