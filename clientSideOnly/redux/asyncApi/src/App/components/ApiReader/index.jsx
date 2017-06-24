import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ApiActions from './actions';
import List from './presentation/List';

const ApiContainer = props => (
  <List{...props} />
);

ApiContainer.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.shape({
    animals: PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  })
};

// connects the component to the flux store
export default connect(state => ({ animals: state.animals }), ApiActions)(ApiContainer);
