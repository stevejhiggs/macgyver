import { combineReducers } from 'redux';
import counter from './components/counter/reducers';
/* This captures routes as state */
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter, // property shorthand, equivilent to counter:counter
  routing: routeReducer
});

export default rootReducer;
