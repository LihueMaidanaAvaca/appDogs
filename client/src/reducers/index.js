import {GET_DOGS, FILTER_BY_TEMP, FILTER_CREATED, ORDER_BY_NAME} from '../actions';

const initialState = {
    allDogs: [],
    everyDogs: [],
    detail: {},
    temperaments: [],
   };

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {...state, allDogs: action.payload, everyDogs: action.payload};
        case FILTER_BY_TEMP:
            const everyDogs = state.everyDogs
            const tempFiltered = action.payload === 'allDogs' ? everyDogs : everyDogs.filter(el => el.temp === action.payload)
            return {...state, allDogs: tempFiltered
            }
        case FILTER_CREATED:
            const everyDogs2 = state.everyDogs 
            const createdFilter = action.payload === 'created' ? everyDogs2.filter(el => el.creted) : everyDogs2.filter(el => !el.created)   
            return {
                ...state, allDogs: action.payload === 'allDogs' ? state.everyDogs : createdFilter
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asd' ? state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }
                return 0
            })
            return{
                ...state, allDogs: sortedArr
            }

        default:
            return {...state};
    }
}


