import { combineReducers } from 'redux';
import counter from './components/counter/reducers';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
