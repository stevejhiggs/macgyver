import React, { PropTypes } from 'react';

// simple presentational components can just use the simple function syntax
// for components
const counterView = (props) => {
  const { increment, incrementIfOdd, decrement, counter } = props;

  return (
    <p>
      Clicked: { counter.count } times
      {' '}
      <button onClick={ increment }>+</button>
      {' '}
      <button onClick={ decrement }>-</button>
      {' '}
      <button onClick={ incrementIfOdd }>Increment if odd</button>
    </p>
  );
};

counterView.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    count: React.PropTypes.number.isRequired
  })
};

export default counterView;
