import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './actions';

//connects the component to the flux store
@connect(state => ({ counter: state.counter }), CounterActions)
class Counter extends Component {
    render() {
        const { increment, incrementIfOdd, decrement, counter } = this.props;
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
            </p>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

export default Counter;
