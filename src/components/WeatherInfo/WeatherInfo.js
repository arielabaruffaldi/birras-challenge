import React from 'react';
import Title from '../UI/Title/Title';
import TransformedWeather from "./../../utils/transformWeather";
import styles from "./WeatherInfo.module.scss";

const WeatherInfo = ({ temp, priority, customClass }) => {
    console.log("priority", priority)
    return (
        <div className={`${styles.WeatherInfo} ${customClass ? customClass : ""}`}>
            {/* TODO: TRAER DINAMICAMENTE LOS ICONOS */}
            {TransformedWeather('Clear', "5rem")}
            <Title priority={priority} customClass={styles.Temperature} title={`${temp}º`}> </Title>
        </div>
    )
}

export default WeatherInfo;