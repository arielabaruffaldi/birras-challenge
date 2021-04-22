import React from 'react';
import Title from '../UI/Title/Title';
import TransformedWeather from "./../../utils/transformWeather";
import styles from "./WeatherInfo.module.scss";

const WeatherInfo = ({ city, priorityCity, temp, priority, customClass, colorSvg = "#01A3FF" }) => {
    return (
        <div className={`${styles.WeatherInfo} ${customClass ? customClass : ""}`}>
            {/* TODO: TRAER DINAMICAMENTE LOS ICONOS */}
            {TransformedWeather('Clear', "5rem", `${colorSvg}`)}
            {city && <Title priority={priorityCity} customClass={styles.customClass} title={city}></Title>}
            <Title priority={priority} customClass={styles.Temperature} title={`${temp}º`}> </Title>
        </div>
    )
}

export default WeatherInfo;