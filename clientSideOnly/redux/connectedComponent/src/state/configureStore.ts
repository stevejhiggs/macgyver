import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(initialState?: {}) {
  const middleware = [
    thunk
  ];

  const composeEnhancers = composeWithDevTools({});
  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware)
  );

  const store = createStore(
    reducer,
    initialState,
    composedEnhancers
  );

  return store;
}
