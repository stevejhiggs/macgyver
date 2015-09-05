import { combineReducers } from 'redux';
import counter from './components/counter/reducers';
import {routerStateReducer as router} from 'redux-react-router';

const rootReducer = combineReducers({
    counter,
    router
});

export default rootReducer;