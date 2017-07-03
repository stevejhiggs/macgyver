import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducer';

declare const window: Window & { devToolsExtension: Function };

export const history = createHistory();

export default function configureStore(initialState?: {}) {
  
  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(
    reducers,
    initialState,
    composedEnhancers
  );

  return store;
}
