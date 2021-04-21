import React from 'react';
import styles from './TextBlock.module.scss';

const TextBlock = ({ title, customClass = "", children }) => {
    return (
        <div className={`${styles.TextBlock} ${customClass}`}>
            <p>{title}</p>
            <p className={styles['TextBlock--subtitle']}>{children}</p>
        </div>
    )
}

export default TextBlock;