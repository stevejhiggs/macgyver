import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import {reduxRouteComponent} from 'redux-react-router';
import configureStore from './reactApp/configureStore';
import CustomRoutes from './reactApp/routes';

const history = new BrowserHistory();
const store = configureStore();

React.render(
    <Provider store={store}>
        {() =>
            <Router history={history}>
                <Route component={reduxRouteComponent(store)}>
                    {CustomRoutes}
                </Route>
            </Router>
        }
    </Provider>,
    document.getElementById('root')
);
