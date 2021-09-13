import {GET_DOGS, FILTER_BY_TEMP} from '../actions';

const initialState = {
    allDogs: [],
    detail: {},
    temperaments: [],
   };

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {...state, allDogs: action.payload};
        case FILTER_BY_TEMP:
            const everyDogs = state.allDogs
            const tempFiltered = action.payload === 'allDogs' ? everyDogs : everyDogs.filter(el => el.temp === action.payload)
            return {
                ...state,
                allDogs: tempFiltered
            }    
        
        default:
            return {...state};
    }
}
