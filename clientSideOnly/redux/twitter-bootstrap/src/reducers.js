import { combineReducers } from 'redux';
import counter from './components/counter/reducers';
import animals from './components/apiReader/reducers';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  animals,
  routing: routeReducer
});

export default rootReducer;
