import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './components/counter/reducers';
import animals from './components/apiReader/reducers';

const rootReducer = combineReducers({
  counter, // property shorthand, equivilent to counter:counter
  animals,
  routing: routerReducer
});

export default rootReducer;
