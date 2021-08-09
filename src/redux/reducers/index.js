import { combineReducers } from "redux";
import { heroReducer } from "./heroReducer";

const reducers = combineReducers({
    allHeroes: heroReducer,
    changeModal: heroReducer,
    onchange: heroReducer,
})

export default reducers;