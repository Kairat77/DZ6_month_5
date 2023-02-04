import {types} from "../types";


const initialState = {
    title: "old title"
}


export default function titleReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: "after three seconds"}

        default: return state
    }

}