import { applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-react-router';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import routes from './routes';

export default function configureStore() {
    return compose(
        applyMiddleware(thunk),
        reduxReactRouter({
            routes,
            createHistory
        })
    )(createStore)(rootReducer);
}
