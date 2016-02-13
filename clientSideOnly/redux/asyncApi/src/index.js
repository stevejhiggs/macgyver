import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApiReader from './components/apiReader';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ApiReader />
  </Provider>,
  document.getElementById('root')
);
