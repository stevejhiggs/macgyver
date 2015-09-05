import React from 'react';
import { Provider } from 'react-redux';
import App from './reactApp/containers/App';
import configureStore from './reactApp/store/configureStore';

const store = configureStore();

React.render(
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    document.getElementById('root')
);
