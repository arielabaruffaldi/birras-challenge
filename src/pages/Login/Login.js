import React from 'react';
import styles from "./Login.module.scss";
import { BiBeer } from "react-icons/bi";
import FormLogin from '../../components/FormLogin/FormLogin';

const Login = (props) => {

    return (
        <section className={styles['Login']}>
            <header>
                <BiBeer size={"3rem"} color={"#01A3FF"} />
                <h1>birras santander.</h1>
            </header>
            <FormLogin></FormLogin>
        </section>
    )
}

export default Login