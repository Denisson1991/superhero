import { ActionTypes } from "../constants/action-types";

const initialState = {
    heroes: [],
    modal: null,
    onchange: ""
}
export const heroReducer =(state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_HEROES:
            return {...state, heroes: payload}

        case ActionTypes.SET_MODAL:
            return {...state, modal: payload}

        case ActionTypes.SET_ONCHANGE:
            return {...state, onchange: payload}
    
    
        default:
            return state
    }
}