import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(history, initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunk
      )
    )
  );

  return store;
}
