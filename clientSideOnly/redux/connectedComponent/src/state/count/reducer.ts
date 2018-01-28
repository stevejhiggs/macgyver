import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { increment, decrement } from './actions';

export type State = { count: number };

const initialState: State = {
  count: 0
};

export const reducer = reducerWithInitialState(initialState)
    .case(increment, (state, payload) => {
      return {
        ...state,
        count: state.count + payload.incrementBy
      };
    })
    .case(decrement, (state, payload) => {
      return {
        ...state,
        count: state.count - payload.incrementBy
      };
    });
