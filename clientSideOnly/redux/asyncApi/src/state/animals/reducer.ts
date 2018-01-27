import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loadAnimalsReducer } from './actions';

export interface Animal {
  id: number;
  name: string;
}

export type State = Animal[];

export const reducer = reducerWithInitialState([] as Animal[])
  .case(loadAnimalsReducer.done, (state, payload) => {
    return payload.result;
  });
