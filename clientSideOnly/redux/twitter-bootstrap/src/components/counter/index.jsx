import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './actions';
import Counter from './presentation/Counter';

class CounterContainer extends Component {
  render() {
    return (
        <Counter {...this.props }/>
    );
  }
}

CounterContainer.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    count: React.PropTypes.number.isRequired
  })
};

// connects the component to the flux store
export default connect(state => ({ counter: state.counter }), CounterActions)(CounterContainer);
