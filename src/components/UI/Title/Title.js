import React from "react";
import styles from './Title.module.scss';

const Title = ({title, children, priority=2}) => {

    let CustomTag = `h${priority}`;

    return (
        <div className={styles.Title}>
            <CustomTag>{title}</CustomTag>
            {children}
        </div>
    );
};

export default Title;
