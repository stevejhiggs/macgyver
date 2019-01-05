import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import App from './ui/pages/Home';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
