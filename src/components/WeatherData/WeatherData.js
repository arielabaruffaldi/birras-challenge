import React from 'react';
import styles from "./WeatherData.module.scss";

function WeatherData({ temp, humidity, wind }) {

    return (
        <div className={styles.WeatherData}>

            <div>
                <span>aca va el icono</span>
                <h3 className={styles.Temperature}>{temp}º </h3>
            </div>

            <div className={styles.ExtraInfo}>
                <p> humedad </p>
                <p>{humidity}%</p>
            </div>

            <div className={styles.Wind}>
                <p>viento</p>
                <p>{wind} m/s</p>
            </div>
        </div>
    )
}

export default WeatherData;