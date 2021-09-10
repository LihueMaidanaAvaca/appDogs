import {SET_DETAIL, SET_DOGS, SET_TEMPERAMENTS, RESET_DETAIL, SET_FAVORITES} from '../actions';

const initialState = {
    allDogs: [],
    detail: {},
    temperaments: [],
   };

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DOGS:
            return {...state, allDogs: action.payload};
        
        default:
            return {...state};
    }
}
