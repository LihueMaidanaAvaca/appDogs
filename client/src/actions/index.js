import axios from 'axios';
export const GET_DOGS = 'GET_DOGS'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'

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

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}