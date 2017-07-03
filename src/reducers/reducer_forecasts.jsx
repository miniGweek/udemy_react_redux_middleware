import {FETCH_FORECASTS} from '../actions/index'

export default function foreCasts(state = [], action){
    switch(action.type){
        case FETCH_FORECASTS:
            return [action.payload.data,...state]
        default:
         return [];
    }
}