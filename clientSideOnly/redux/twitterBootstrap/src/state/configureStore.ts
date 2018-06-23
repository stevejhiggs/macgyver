import { createStore, applyMiddleware, DeepPartial } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer, RootState } from './reducer';

export const history = createHistory();

export default function configureStore(initialState: DeepPartial<RootState>) {
  const middleware = [
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
