import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { reducer as counterReducer, State as counterState } from './count/reducer';

export interface RootState {
  counter: counterState;
  router: RouterState;
}

export const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  router: routerReducer
});
