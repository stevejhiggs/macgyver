import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
    counter: state.counter
}))
export default class CounterApp {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { counter, dispatch } = this.props;
        return (
            <Counter counter={counter}
                {...bindActionCreators(CounterActions, dispatch)} />
        );
    }
}