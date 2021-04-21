import * as actionTypes from "./../types";
import axios from "axios";
import { userData } from "./../../utils/MOCK_DATA";
import { mailExists } from "./../../utils/local-storage"

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
    if (payload.password === "santander") {
        if (payload.email === "user@birras.com") {
            localStorage.setItem("birras-auth", true);
            localStorage.setItem("user-mail", payload.email);
            dispatch({
                type: actionTypes.LOGIN_REQUEST,
                payload,
            });
            dispatch(getUserByMail(payload.email))
        } else if (payload.email === "admin@birras.com") {
            localStorage.setItem("birras-auth", true);
            localStorage.setItem("user-mail", payload.email);
            dispatch(getUserByMail(payload.email))
            dispatch({
                type: actionTypes.LOGIN_REQUEST,
                payload,
            });
        } else {
            dispatch(
                setError({
                    error: true,
                    errorMessage: "Ocurrió un error, intentá nuevamente",
                })
            );
        }
    } else {
        dispatch(
            setError({
                error: true,
                errorMessage: "Ocurrió un error, intentá nuevamente",
            })
        );
    }
};

export const logOutUser = () => async (dispatch) => {
    localStorage.removeItem("birras-auth");
    localStorage.removeItem("user-mail");
    window.location.reload();
};

export const getUserByMail = (email) => (dispatch) => {
    let emailToFetch = mailExists() || email;
    const user = userData.filter(user => user.email === emailToFetch);
    dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: {
            name: user[0].name,
            lastName: user[0].lastName,
            role: user[0].role,
            email: user[0].email
        }
    })
};

export const setModalOpen = (state, modal) => {
    switch (modal) {
        case "newMeet":
            return {
                type: actionTypes.NEW_MEET_MODAL_OPEN,
                payload: state,
            };
        default:
            return null;
    }
};