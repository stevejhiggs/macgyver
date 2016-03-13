import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose (
      applyMiddleware(
        thunk
      )
    )
  );

  return store;
}
