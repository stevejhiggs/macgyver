import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loadAnimals } from './actions';

export interface Animal {
  id: number;
  name: string;
}

export type State = Animal[];
const initialState: State = [];

export const reducer = reducerWithInitialState(initialState)
  .case(loadAnimals.done, (state, payload) => {
    return payload.result;
  });
