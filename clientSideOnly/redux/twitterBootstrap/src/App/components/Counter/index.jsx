import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as CounterActions from './actions';
import { Button } from 'react-bootstrap';

const Counter = props =>
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <Button onClick={props.increment} bsStyle="primary">+</Button>
    {' '}
    <Button onClick={props.decrement} bsStyle="primary">-</Button>
    {' '}
    <Button onClick={props.incrementIfOdd}  bsStyle="warning">Increment if odd</Button>
  </p>;

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    count: PropTypes.number.isRequired
  })
};

// connects the component to the flux store
export default connect(state => ({ counter: state.counter }), CounterActions)(Counter);
