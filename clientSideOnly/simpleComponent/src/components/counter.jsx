import React, { Component, PropTypes } from 'react';

// as this component has state it cant be written as a pure function
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startVal };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <p>
        Clicked: {this.state.count} times
        {' '}
        <button onClick={() => this.increment()}>+</button>
        {' '}
        <button onClick={() => this.decrement()}>-</button>
      </p>
    );
  }
}

Counter.propTypes = {
  startVal: PropTypes.number.isRequired
};
