import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ApiActions from './actions';
import List from './presentation/List';

const ApiContainer = (props) => (
  <List {...props } />
);

ApiContainer.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.object.isRequired
};

// connects the component to the flux store
export default connect(state => ({ animals: state.animals }), ApiActions)(ApiContainer);
