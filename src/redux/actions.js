import {types} from "./types";


function changeTitleAction () {
    return {
        type: types.CHANGE_TITLE
    }
}


export function sayHelloAction () {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTitleAction())
        }, 1000)
    }
}

function photosInfo (photosArr) {

    return {
        type: types.GET_PHOTOS,
        payload: photosArr
    }

}

export function getPhotosAction () {
    return async function(dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const photos = await response.json()
        dispatch(photosInfo(photos))
    }
}



function photoInf(obj){
    return {
        type: types.PHOTO,
        payload: obj
    }
}



export function photoAction(id){
    return async function (dis){
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const photo = await res.json()
        dis(photoInf(photo))
    }
}
