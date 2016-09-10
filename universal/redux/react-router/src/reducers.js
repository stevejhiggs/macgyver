import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './components/counter/reducers';

const rootReducer = combineReducers({
  counter, // property shorthand, equivilent to counter:counter
  routing: routerReducer
});

export default rootReducer;
