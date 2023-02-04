import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import photosReducer from "./photosReducer";
import photoReducer from "./photoReducer";



export const rootReducer = combineReducers( {
    titleReducer,
    photosReducer,
    photoReducer
})