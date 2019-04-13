import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './ui/pages/Home';
import { CounterContainer } from './state/CounterContainer';

ReactDOM.render(
  <CounterContainer.Provider>
    <App />
  </CounterContainer.Provider>,
  document.getElementById('root') as HTMLElement
);
