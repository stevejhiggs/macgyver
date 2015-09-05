import React from 'react';
import { Provider } from 'react-redux';
import Counter from './reactApp/components/counter';
import configureStore from './reactApp/configureStore';

const store = configureStore();

React.render(
    <Provider store={store}>
        {() => <Counter />}
    </Provider>,
    document.getElementById('root')
);
