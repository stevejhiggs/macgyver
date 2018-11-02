// this is the main external interface to the state system by the ui
// apart from this all your components should be using are actions
// its more just to pull everything together in one easy to access place
export { connect } from 'react-redux';
import { RootState } from './reducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

// make sure our mapped dispatch type knows it can dispatch thunks
export type Thunk = ThunkAction<void, RootState, null, Action>;
export type Dispatch<S = RootState> = ThunkDispatch<S, null, Action>;
