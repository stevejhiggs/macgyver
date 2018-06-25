import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loadAnimals } from './actions';

export interface Animal {
  id: number;
  name: string;
}

export type State = Animal[];

export const reducer = reducerWithInitialState([] as Animal[])
  .case(loadAnimals.async.done, (state, payload) => {
    return payload.result;
  });
