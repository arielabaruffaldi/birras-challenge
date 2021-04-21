
import * as actionTypes from "./../types";
import { setLoading, setModalOpen } from './index';

export const setMeet = (value) => (dispatch) => {
    setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setModalOpen(false, "newMeet"));
    }, 1000)

    dispatch({
        type: actionTypes.SET_MEET,
        payload: value,
    });

};
