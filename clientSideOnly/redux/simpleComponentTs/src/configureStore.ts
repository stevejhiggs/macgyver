import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState: any) {

  const enhancers = [];
  const middleware = [
    thunk
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (<any>window).devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
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
