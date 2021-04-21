import React from 'react';
import styles from "./WeatherData.module.scss";
import TextBlock from '../UI/TextBlock/TextBlock';
import WeatherInfo from "./../WeatherInfo/WeatherInfo";

function WeatherData({ temp, humidity, wind, min, max }) {

    return (
        <div className={styles.WeatherData}>
            <WeatherInfo priority={3} temp={temp}></WeatherInfo>
            <div className={styles['TextBlock--container']}>
                <TextBlock customClass={styles.WeatherDataItem} title={"Humedad"}>{humidity}% </TextBlock>
                <TextBlock customClass={styles.Wind} title={"Viento"}> {wind} </TextBlock >
            </div>
            <div className={styles['TextBlock--container']}>
                <TextBlock title={"Mínima"}>{min}</TextBlock>
                <TextBlock title={"Máxima"}>{max}</TextBlock>
            </div>
        </div>
    )
}

export default WeatherData;