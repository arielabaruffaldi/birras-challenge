import React, { useState } from 'react';
import { loginRequest } from '../../store/actions';
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const state = useSelector((state) => state.general);
    const handleInput = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loginRequest(values));
        props.history.push('/');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Contraseña"
                    onChange={handleInput}
                />
                <input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleInput}
                />
                <button className="button">Iniciar sesión</button>
            </form>
            <p>{state.error && state.errorMessage}</p>
        </>
    )
}

export default Login