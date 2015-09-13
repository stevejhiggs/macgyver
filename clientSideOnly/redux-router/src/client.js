import React from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-react-router';
import configureStore from './reactApp/configureStore';

const store = configureStore();

React.render(
    <Provider store={store}>
        {() =>
            <ReduxRouter/>
        }
    </Provider>,
    document.getElementById('root')
);
