import { combineReducers } from 'redux';
import { reducer as counterReducer, State as counterState } from './App/components/Counter/reducers';

export interface IRootState {
  counter: counterState,
}

export const rootReducer = combineReducers<IRootState>({
  counter: counterReducer,
});

export default rootReducer;
