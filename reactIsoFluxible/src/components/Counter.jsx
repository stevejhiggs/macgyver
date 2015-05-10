import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import CountStore from '../stores/CountStore';
import incrementCount from '../actions/incrementCount';

class Counter extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    onIncrement(val) {
        //fire off the increment count action
        this.context.executeAction(incrementCount, val);
    }

    render() {
        return (
            <div>
                <h1>Im a nice counter {this.props.count}</h1>
                <button onClick={this.onIncrement.bind(this,1)}>+1</button>
                <button onClick={this.onIncrement.bind(this,5)}>+5</button>
            </div>);
    }
}

//auto binds the props to the store
Counter = connectToStores(Counter, [CountStore], function (stores, props) {
    return {
        count: stores.CountStore.getCount()
    };
});

export default Counter;