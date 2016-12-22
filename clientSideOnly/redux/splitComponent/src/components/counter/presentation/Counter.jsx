import React, { PropTypes } from 'react';

// simple presentational components can just use the simple function syntax
// for components
const counterView = props =>
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <button onClick={props.increment}>+</button>
    {' '}
    <button onClick={props.decrement}>-</button>
    {' '}
    <button onClick={props.incrementIfOdd}>Increment if odd</button>
  </p>;

counterView.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    count: React.PropTypes.number.isRequired
  })
};

export default counterView;
