import * as actionType from "../types";
import { tokenExists } from "./../../utils/local-storage"

export const INITIAL_STATE = {
    isAuthenticated: tokenExists(),
    error: false,
    errorMessage: "",
    loading: false,
    userData: {},
    newMeetModalOpen: false,

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return { ...state, isAuthenticated: true };
        case actionType.ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            };
        case actionType.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case actionType.SET_USER_DATA:
            return { ...state, userData: action.payload };
        case actionType.NEW_MEET_MODAL_OPEN:
            return {
                ...state,
                newMeetModalOpen: action.payload,
            };
        default:
            return state;
    }
}
