import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';
import { loadAnimals, Animal } from './actions';

export type State = Animal[];

export const reducer = reducerWithInitialState([] as Animal[])
  .case(loadAnimals.done, (state, payload) => {
    return payload.result;
  });
