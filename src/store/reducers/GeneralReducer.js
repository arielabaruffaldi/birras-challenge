import * as actionType from "../types";
import { tokenExists } from "./../../utils/local-storage"

export const INITIAL_STATE = {
    isAuthenticated: tokenExists(),
    error: false,
    errorMessage: "",
    userData: {}
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
        case actionType.SET_USER_DATA:
            return { ...state, userData: action.payload };
        default:
            return state;
    }
}
