import React from 'react';
import styles from './MeetCard.module.scss';
import Title from './../UI/Title/Title';
import Participants from '../Participants/Participants';

const MeetCard = ({
    hour,
    title,
    description,
    date,
    participants
}) => {
    return (
        <div className={`${styles.MeetCard}`}>
            <div>
                <>
                    <div className={styles['MeetCard--Header']}>
                        <Title tag={"span"} customClass={styles['MeetCard--dateInfo']} title={`${date}`}></Title>
                        <Title tag={"span"} customClass={styles['MeetCard--dateInfo']} title={`${hour.start} - ${hour.end}`}></Title>
                    </div>
                    <Title customClass={styles['MeetCard--title']} title={title}></Title>
                    <Participants participants={participants} />
                </>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default MeetCard;