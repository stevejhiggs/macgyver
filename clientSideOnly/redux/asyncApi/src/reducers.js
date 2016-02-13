import { combineReducers } from 'redux';
import counter from './components/counter/reducers';
import animals from './components/apiReader/reducers';

const rootReducer = combineReducers({
  counter,
  animals
});

export default rootReducer;
