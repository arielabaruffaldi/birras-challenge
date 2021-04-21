import React from "react";
import styles from './Title.module.scss';

const Title = ({
    title,
    children,
    priority = 2,
    underlined,
    hasMargin,
    customClass,
    tag
}) => {
    let CustomTag = tag ? tag : `h${priority}`;
    console.log(CustomTag)
    return (
        <div className={`${customClass ? customClass : ""} ${styles.Title} ${underlined ? styles.underlined : ""} ${hasMargin ? styles.hasMargin : ""}`}>
                <CustomTag>{title}</CustomTag>
                {children}
        </div>
    );
};

export default Title;
