import { combineReducers, Dispatch as ReduxDispatch } from 'redux';
import { reducer as animalReducer, State as animalState } from './animals/reducer';

export interface RootState {
  animals: animalState;
}

export type Dispatch = ReduxDispatch<RootState>;

export const rootReducer = combineReducers<RootState>({
  animals: animalReducer,
});

export default rootReducer;
