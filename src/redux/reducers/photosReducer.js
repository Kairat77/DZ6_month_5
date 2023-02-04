import {types} from "../types";


const initialState = {
    photos: []
}


export default function photosReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PHOTOS:
            return {...state, photos: action.payload}

        default: return state
    }
}