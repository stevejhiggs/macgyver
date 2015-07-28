import React, { PropTypes } from 'react';
import Marty from 'marty';

class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        //  ::x is an es7 shortcut to this.x.bind(this);
        return (
            <p>
                Clicked: {this.props.count} times
                {' '}
                <button onClick={::this.increment}>+</button>
                {' '}
                <button onClick={::this.decrement}>-</button>
            </p>
        );
    }

    increment() {
        this.app.counterStore.incrementCount(+1);
    }

    decrement() {
        this.app.counterStore.incrementCount(-1);
    }
}

export default Marty.createContainer(Counter, {
    listenTo: 'counterStore',
    fetch: {
        count() {
            return this.app.counterStore.getCount();
        }
    },
    failed(errors) {
        return <div className="User User-failedToLoad">{errors}</div>;
    },
    pending() {
        return this.done({
            count: {}
        });
    }
});
