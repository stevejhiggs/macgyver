import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './reactApp/routes';
import configureStore from './reactApp/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
