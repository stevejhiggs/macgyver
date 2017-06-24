import { combineReducers } from 'redux';
import counter from './App/components/Counter/reducers';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
