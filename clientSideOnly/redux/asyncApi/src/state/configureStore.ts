import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducer';

export default function configureStore(initialState?: {}) {
  const middleware = [
    thunk
  ];

  const composeEnhancers = composeWithDevTools({});

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware)
  );

  const store = createStore(
    reducers,
    initialState,
    composedEnhancers
  );

  return store;
}
