import * as actionType from "../types";

export const INITIAL_STATE = {
    meets: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SET_MEET:
            return { ...state, meets: [...state.meets, action.payload] };
        default:
            return state;
    }
}