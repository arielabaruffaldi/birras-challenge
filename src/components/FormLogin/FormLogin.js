import React, { useState } from 'react';
import styles from "./FormLogin.module.scss";

import Input from "../../components/UI/Input/Input";
import { useInput } from './../../utils/useInput';

import Button from '../../components/UI/Button/Button';

import { loginRequest } from '../../store/actions';
import { useSelector, useDispatch } from "react-redux";

const FormLogin = () => {
    const { value: email, bind: bindEmail } = useInput('')
    const { value: password, bind: bindPassword } = useInput('')
    const state = useSelector((state) => state.general);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loginRequest({
            email: email,
            password: password
        }));
    }

    return (
        <form onSubmit={handleSubmit} className={styles['FormLogin']}>
            <h2>Hola{email && ","} <span>{email}</span></h2>
            <Input
                tag={"input"}
                type="email"
                name="email"
                placeholder="Tu email"
                customClass={styles['Login--Input']}
                {...bindEmail}
            />
            <Input
                tag={"input"}
                type="password"
                name="password"
                placeholder="Tu contraseña"
                customClass={styles['Login--Input']}
                {...bindPassword}
            />
            <div className={styles['FormLogin--Buttons']}>
                <Button secondary>Iniciar sesión</Button>
                <Button custonClass={styles['FormLogin--Button']} noBorder>Crear una cuenta</Button>
                <Button custonClass={styles['FormLogin--Button']} noBorder>Olvidé mi contraseña</Button>
            </div>
            <span className={styles.Error}>{state.error && state.errorMessage}</span>
        </form>
    )
}

export default FormLogin;