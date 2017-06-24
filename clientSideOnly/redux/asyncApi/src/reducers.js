import { combineReducers } from 'redux';
import animals from './App/components/ApiReader/reducers';

const rootReducer = combineReducers({
  animals
});

export default rootReducer;
