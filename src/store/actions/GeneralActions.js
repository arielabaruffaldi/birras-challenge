
import * as actionTypes from "./../types";
import axios from "axios";


export const setError = (values) => {
    return {
        type: actionTypes.ERROR,
        payload: values,
    };
};

export const setLoading = (value) => {
    return {
        type: actionTypes.LOADING,
        payload: value,
    };
};

export const loginRequest = payload => (dispatch) => {
    if (payload.email === "user@birras.com") {
        localStorage.setItem("birras-auth", true);
        dispatch({
            type: actionTypes.LOGIN_REQUEST,
            payload,
        });
        dispatch({
            type: actionTypes.SET_USER_DATA,
            payload: {
                name: "Bill",
                lastName: "Murray",
                role: "user"
            }
        })
    } else {
        dispatch(
            setError({
                error: true,
                errorMessage: "ocurrio un error",
            })
        );
    }
};

export const getUser = () => (dispatch) => {
    //hardcodeo el id ya que no tengo una api propia, si no buscaría por id
    axios
        .get(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => {
            console.log(response.data)
            dispatch({
                type: actionTypes.SET_USER_DATA,
                payload: {
                    name: response.data.name,
                    role: "user"
                }
            })
        })
        .catch((error) => {
            throw error;
        });
};