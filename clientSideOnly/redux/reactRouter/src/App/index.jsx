import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore, { history} from '../configureStore';
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Link } from 'react-router-dom';
import HomeView from './views/home';
import AboutView from './views/about';
import NotFoundView from './views/notFound';

const store = configureStore();

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <div className="App-header">
          <h2>redux integrated react router</h2>
        </div>

        <div className="page-container">
          <h1>I am the container</h1>

          <header>
            <Link to="/">Home</Link>
            {' '}
            <Link to="/about">About</Link>
            {' '}
            <Link to="/notexist">404</Link>
          </header>

          <main className="view-container">
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/about" component={AboutView} />
              <Route path="*" component={NotFoundView} />
            </Switch>
          </main>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default app;
