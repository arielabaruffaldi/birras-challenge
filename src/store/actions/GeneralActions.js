import * as actionTypes from "./../types";
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
    dispatch(setLoading(true))
    const user = userData.filter(user => user.email === payload.email);

    setTimeout(() => {
        dispatch(setLoading(false))
    }, 1000)

    dispatch({
        type: actionTypes.LOGIN_REQUEST,
        payload,
    });
    dispatch(getUserByMail(payload.email))
};

export const logOutUser = () => async (dispatch) => {
    localStorage.removeItem("birras-auth");
    localStorage.removeItem("user-mail");
    window.location.reload();
};

export const getUserByMail = (email) => (dispatch) => {
    console.log(email)
    let emailToFetch = mailExists() || email;
    const user = userData.filter(user => user.email === emailToFetch);
    dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: {
            name: "John",
            lastName: "",
            role: "admin",
            email: email
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