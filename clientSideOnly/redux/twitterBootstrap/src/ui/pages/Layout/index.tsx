import './layout.css';

import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HomePage from '../Home';
import AboutPage from '../About';
import NotFoundPage from '../NotFound';

const app = () => (
  <div className="App">
    <div className="page-container">
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">bootstrap nav</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <NavLink activeClassName="activeNav" exact={true} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="activeNav" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="activeNav" to="/notexist">
                404
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
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
