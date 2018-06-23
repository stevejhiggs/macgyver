import { combineReducers } from 'redux';
import { reducer as counterReducer, State as counterState } from './count/reducer';

export interface RootState {
  counter: counterState;
}

export const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
});

export default rootReducer;
