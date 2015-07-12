import React, { PropTypes } from 'react';

export default class Counter extends React.Component {
    static propTypes = {
        startVal: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { count: props.startVal };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement= () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <p>
                Clicked: {this.state.count} times
                {' '}
                <button onClick={this.increment}>+</button>
                {' '}
                <button onClick={this.decrement}>-</button>
            </p>
        );
    }
}
