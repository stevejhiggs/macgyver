import {Action} from 'redux';
import {isType} from 'typescript-fsa';
import {increment, decrement} from './actions';

type State = { count: number };

const initialState: State = {
  count: 0
};

const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, increment)) {
    return Object.assign({}, state, {
      count: state.count + 1
    });
  }

  if (isType(action, decrement)) {
    return Object.assign({}, state, {
      count: state.count - 1
    });
  }

  return state; 
};

export default reducer;
