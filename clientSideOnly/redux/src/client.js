import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './reactApp/components/counter';
import configureStore from './reactApp/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
