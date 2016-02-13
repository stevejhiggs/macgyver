import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ApiActions from './actions';
import List from './presentation/List';

class ApiContainer extends Component {
  render() {
    return (
        <List {...this.props }/>
    );
  }
}

ApiContainer.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.object.isRequired
};

// connects the component to the flux store
export default connect(state => ({ animals: state.animals }), ApiActions)(ApiContainer);
