import { combineReducers } from 'redux';
import { reducer as animalReducer, State as animalState } from './animals/reducer';

export interface RootState {
  animals: animalState;
}

export const rootReducer = combineReducers<RootState>({
  animals: animalReducer,
});
