import axios from 'axios';
export const GET_DOGS = 'GET_DOGS'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'

export function getDogs() {
    return async function(dispatch){
        var json = await axios ("http://localhost:3001/dogs");
        console.log('action', json.data)
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function filterDogsByTemp(payload){
    return {
        type: FILTER_BY_TEMP,
        payload
    }
}