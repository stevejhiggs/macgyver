import * as CounterActions from '../../../state/count/actions';
import { Counter, Props } from './presentation/Counter';
import { bindActionCreators, connect, RootState, Dispatch } from '../../../state';

type ConnectedProps = Pick<Props, 'startVal'>; 

const mapStateToProps = (state: RootState, ownProps: ConnectedProps) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    increment: CounterActions.increment,
    decrement: CounterActions.decrement,
  }, 
  dispatch
);

// connects the component to the flux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
