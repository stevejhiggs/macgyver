import { combineReducers, Dispatch as ReduxDispatch } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as counterReducer, State as counterState } from './count/reducer';

export interface RootState {
  counter: counterState;
}

export type Dispatch = ReduxDispatch<RootState>;

export const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  router: routerReducer
});

export default rootReducer;
