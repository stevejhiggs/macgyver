import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import counter from './App/components/Counter/reducers';

const rootReducer = combineReducers({
  counter,
  router: routerReducer
});

export default rootReducer;
