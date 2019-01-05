import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { reducer as counterReducer, State as counterState } from './count/reducer';

export interface RootState {
  counter: counterState;
  router: RouterState;
}

export default (history: History<{}>) => combineReducers<RootState>({
  counter: counterReducer,
  router: connectRouter(history)
});
