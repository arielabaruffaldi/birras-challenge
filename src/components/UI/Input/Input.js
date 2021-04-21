import React from 'react';
import Title from '../Title/Title';
import styles from "./Input.module.scss";

const Input = ({ label, tag, registrar, placeholder, customClass, type = "text", children, ...props }) => {
    const CustomInput = tag;
    return (
        <div className={` ${customClass ? customClass : ""} ${styles.Input}`}>
            {label && <Title tag="label" size={1} title={label}></Title>}
            {tag &&
                <CustomInput
                    placeholder={placeholder}
                    {...props}
                    type={type}
                />
            }
            {children}
        </div>
    )
}

export default Input;