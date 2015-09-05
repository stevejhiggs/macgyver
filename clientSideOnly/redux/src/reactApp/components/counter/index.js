import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './counter';
import * as CounterActions from './actions';

// connects the state to the props of the underlying component

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);