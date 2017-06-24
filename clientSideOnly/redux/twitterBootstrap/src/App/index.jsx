import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore, { history} from '../configureStore';
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Link } from 'react-router-dom';
import HomeView from './views/home';
import AboutView from './views/about';
import NotFoundView from './views/notFound';
import { ButtonGroup } from 'react-bootstrap';

const store = configureStore();

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <header>
          <ButtonGroup justified>
            <Link className="btn btn-info" role="button" activeClassName="active" to="/">
              Home
            </Link>
            <Link className="btn btn-info" role="button" activeClassName="active" to="/about">
              About
            </Link>
            <Link className="btn btn-info" role="button" activeClassName="active" to="/notexist">
              404
            </Link>
          </ButtonGroup>
        </header>
        <div className="view-container">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Route path="*" component={NotFoundView} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default app;
