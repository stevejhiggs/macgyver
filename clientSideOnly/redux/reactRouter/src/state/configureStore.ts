import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const history = createHistory();

export default function configureStore(initialState?: {}) {
  const middleware = [
    thunk,
    routerMiddleware(history)
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
