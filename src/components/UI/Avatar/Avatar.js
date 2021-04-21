import React from 'react';
import styles from "./Avatar.module.scss";

const Avatar = ({
    chart,
    ...props
}) => {
    const classes = [
        "var(--rojo)",
        "var(--naranja)",
        "var(--verde)",
        "var(--azul)"
    ]
    return (
        <div style={{ backgroundColor: classes[Math.floor(Math.random() * classes.length)] }} className={styles.Avatar} {...props}>
            <span>{chart}</span>
        </div>
    )
}

export default Avatar;
