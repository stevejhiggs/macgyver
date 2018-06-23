import { createStore, applyMiddleware, DeepPartial, AnyAction } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { RootState, rootReducer } from './reducer';

export default function configureStore(initialState: DeepPartial<RootState>) {
  const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware;
  
  const middleware = [
    thunk
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

  return store;
}
