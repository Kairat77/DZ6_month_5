import {types} from "../types";

const initialState = {
    photo: {}
}


export default function photoReducer(state = initialState, action){
    switch (action.type) {
        case types.PHOTO:
            return {...state, photo: action.payload}
        default: return state
    }
}