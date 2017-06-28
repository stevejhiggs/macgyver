import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from './actions';
import { Counter, Props } from './presentation/Counter';
import { IRootState } from '../../../reducers';

type ConnectedProps = Pick<Props, 'startVal'>; 

const mapStateToProps = (state: any, ownProps: ConnectedProps) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) => bindActionCreators({
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
}, dispatch);

// connects the component to the flux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
