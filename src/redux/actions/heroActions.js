import { ActionTypes } from "../constants/action-types"

export const setHeroes = (heroes) => {
    return {
        type: ActionTypes.SET_HEROES,
        payload: heroes,
    }
}

export const setModal = (item) => {
    return {
        type: ActionTypes.SET_MODAL,
        payload: item,
    }
}

export const setOnchange = (item) => {
    return {
        type: ActionTypes.SET_ONCHANGE,
        payload: item,
    }
}