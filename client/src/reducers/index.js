import {GET_DOGS} from '../actions';

const initialState = {
    allDogs: [],
    detail: {},
    temperaments: [],
   };

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {...state, allDogs: action.payload};
        
        default:
            return {...state};
    }
}
