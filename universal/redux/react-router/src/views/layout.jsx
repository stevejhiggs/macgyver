import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const CoreLayout = props => (
  <div className="page-container">
    <h1>I am the container</h1>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
      {' '}
      <Link to="/notexist">404</Link>
    </header>
    <div className="view-container">
      {props.children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node.isRequired
};

// connects the component to the flux store
export default connect(state => ({ routerState: state.router }))(CoreLayout);
