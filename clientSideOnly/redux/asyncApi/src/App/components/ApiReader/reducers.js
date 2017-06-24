import { REQUEST_ANIMALS, RECEIVE_ANIMALS } from './actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  animals: []
};

export default function animals(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ANIMALS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ANIMALS:
      return Object.assign({}, state, {
        isFetching: false,
        animals: action.animals,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
