import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-react-router';
import configureStore from './reactApp/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter/>
    </Provider>,
    document.getElementById('root')
);
