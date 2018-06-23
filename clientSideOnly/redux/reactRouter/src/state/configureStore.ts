import { createStore, applyMiddleware, DeepPartial } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { RootState, rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const history = createHistory();

export default function configureStore(initialState: DeepPartial<RootState>) {
  const middleware = [
    thunk,
    routerMiddleware(history)
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
