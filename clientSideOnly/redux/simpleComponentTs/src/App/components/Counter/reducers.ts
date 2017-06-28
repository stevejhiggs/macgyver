import { reducerWithInitialState } from "typescript-fsa-reducers";
import {increment, decrement} from './actions';

export type State = { count: number };

const initialState: State = {
  count: 0
};

export const reducer = reducerWithInitialState(initialState)
    .case(increment, (state) => {
      return Object.assign({}, state, {
        count: state.count + 1
      });
    })
    .case(decrement, (state) => {
      return Object.assign({}, state, {
        count: state.count - 1
      });
    });
