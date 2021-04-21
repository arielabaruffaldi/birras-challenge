import React from 'react';
import styles from './ProvicionesCard.module.scss';
import Title from '../UI/Title/Title';
import Participants from '../Participants/Participants';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const ProvicionesCard = ({
    provisions,
    description,
    date,
    participants,
    temp
}) => {
    const packs = parseInt(provisions / 6);
    const latas = provisions % 6;
    return (
        <div className={`${styles.ProvicionesCard}`}>
            <div className={styles['ProvicionesCard--Header']}>
                <Title tag={"span"} customClass={styles['ProvicionesCard--subtitle']} title={description}></Title>
                <Title tag={"span"} customClass={styles['ProvicionesCard--dateInfo']} title={date}></Title>
            </div>
            <Title customClass={styles['ProvicionesCard--title']} title={`${packs > 0 ? `${packs} packs` : "" } ${latas > 0 ? `y ${latas} latas` : ""}`}></Title>
            <div className={styles['ProvicionesCard--Header']}>
                <Participants participants={participants} />
                <WeatherInfo customClass={styles['Proviciones--WeatherInfo']} temp={temp}></WeatherInfo>
            </div>
        </div>
    )
}

export default ProvicionesCard;