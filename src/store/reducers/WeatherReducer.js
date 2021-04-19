import * as actionType from "../types";

export const INITIAL_STATE = {
    weatherData: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SET_WEATHER_DATA:
            return { ...state, weatherData: action.payload };
        default:
            return state;
    }
}
