import { createStore, applyMiddleware, DeepPartial } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { RootState, rootReducer } from './reducer';

import * as sagas from './sagas';

export default function configureStore(initialState: DeepPartial<RootState>) {
  const sagaMiddleware = createSagaMiddleware();
  
  const middleware = [
    sagaMiddleware
  ];

  const composeEnhancers = composeWithDevTools({});

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware)
  );

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );

  for (const sagaKey of Object.keys(sagas)) {
    sagaMiddleware.run(sagas[sagaKey]);
  }

  return store;
}
