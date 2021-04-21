import React from 'react';
import styles from "./Button.module.scss"

const Button = ({ type, href, text, secondary, noBorder, custonClass, onClick, size = 1, weight = 300, tag = "button", children, ...props }) => {
    let CustomTag = tag;
    return (
        <CustomTag
            to={`${href ? href : ""}`}
            className={
                `${styles.Button} ${custonClass ? custonClass : ""} ${secondary ? styles.secondary : ""} ${noBorder ? styles.noBorder : ""}`
            }
            type={type ? type : ""}
            onClick={onClick}
            {...props}
        >
            {text && text}
            {children}

        </CustomTag>
    )
}
export default Button;