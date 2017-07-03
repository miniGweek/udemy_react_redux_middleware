import { combineReducers } from 'redux';
import ForeCasts from './reducer_forecasts'

const rootReducer = combineReducers({
    'foreCastData': ForeCasts
});

export default rootReducer;