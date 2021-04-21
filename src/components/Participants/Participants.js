import React, { useState } from "react";
import styles from "./Participants.module.scss";
import Avatar from '../UI/Avatar/Avatar';

const Participants = ({ participants }) => {
  
    return (
        <div className={styles['Participants--Container']}>
            {
                participants.map(item => {
                    const normalizedChart = item.replace(/\s/g, '')
                    return (
                        <>
                            <Avatar chart={normalizedChart.charAt(0).toUpperCase()} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Participants;