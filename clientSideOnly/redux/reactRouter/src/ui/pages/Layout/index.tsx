import './layout.css';
import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from '../Home';
import AboutPage from '../About';
import NotFoundPage from '../NotFound';

const app = () => (
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
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </div>
);

export default app;
