import { createStore, applyMiddleware, DeepPartial } from 'redux';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(initialState: DeepPartial<RootState>) {
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
