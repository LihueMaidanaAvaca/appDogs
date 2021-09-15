import axios from 'axios';
export const GET_DOGS = 'GET_DOGS'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const GET_NAMEDOGS = 'GET_NAMEDOGS'
export const GET_TEMPS = 'GET_TEMPS'
export const SET_NAME = 'SET_NAME'

export function getDogs() {
    return async function(dispatch){
        var json = await axios("http://localhost:3001/dogs");
        console.log('action', json.data)
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function getNameDogs(name){
    console.log('name', name)
    return async function(dispatch){
        try{
            var json = await axios("http://localhost.3001/dogs?name="+ name);
            return dispatch ({
                type : GET_NAMEDOGS,
                payload: json.data
            })
        }catch (error){
            console.log(error)
        }
    }
}

export function setFilterName(name){
    return ({
        type : SET_NAME,
        payload: name
    })

}


export function getTemps(){
    return async function (dispatch) {
        var info = await axios("http://localhost.3001/temperaments", {

        });
        return dispatch({ 
            type: GET_TEMPS,
            payload: info.data
        })
    }
}

export function postAdopted(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost.3001/dogs", payload);
        return response;
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