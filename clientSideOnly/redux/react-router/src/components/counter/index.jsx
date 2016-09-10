import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './actions';

const Counter = (props) =>
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <button onClick={props.increment}>+</button>
    {' '}
    <button onClick={props.decrement}>-</button>
    {' '}
    <button onClick={props.incrementIfOdd}>Increment if odd</button>
  </p>;


Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    count: React.PropTypes.number.isRequired
  })
};

// connects the component to the flux store
export default connect(state => ({ counter: state.counter }), CounterActions)(Counter);
