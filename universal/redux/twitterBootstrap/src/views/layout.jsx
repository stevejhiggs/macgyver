import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { ButtonGroup } from 'react-bootstrap';

const CoreLayout = (props) => (
  <div className="page-container">
    <header>
      <ButtonGroup justified>
        <IndexLink className="btn btn-info" role="button" activeClassName="active" to="/">
          Home
        </IndexLink>
        <Link className="btn btn-info" role="button" activeClassName="active" to="/about">
          About
        </Link>
        <Link className="btn btn-info" role="button" activeClassName="active" to="/notexist">
          404
        </Link>
      </ButtonGroup>
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
