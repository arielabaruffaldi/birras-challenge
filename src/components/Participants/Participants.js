import React from "react";
import styles from "./Participants.module.scss";
import Avatar from '../UI/Avatar/Avatar';
import Title from "../UI/Title/Title";

const Participants = ({ participants }) => {
    const participantes = participants.length > 6 ? participants.slice(0, 6) : participants;
    return (
        <div className={styles['Participants--Container']}>
            <ul>
                {
                    participantes.map((item, index) => {
                        const normalizedChart = item.replace(/\s/g, '')
                        return (
                            <li key={index}>
                                <Avatar chart={normalizedChart.charAt(0).toUpperCase()} />
                            </li>
                        )
                    })
                }
            </ul>
            <Title tag={"span"} customClass={styles['Participants--detail']} title={`${participants.length} invitados`}></Title>
        </div >
    )
}

export default Participants;