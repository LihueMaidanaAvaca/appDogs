import axios from 'axios';

export const SET_DOGS = "SET_DOGS"



export function getDogs(){
    console.log('action')
    return dispatch =>{
        axios.get ("http://localhost:3001/dogs")
        .then((response)=>
            dispatch({
                type : SET_DOGS, 
                payload : response.data
            })
        )
    }
}