import * as React from 'react';
import * as CounterActions from '../../state/count/actions';
import { connect, RootState, Dispatch } from '../../state';

interface PropsFromState {
  count: number;
}

interface PropsFromDispatch {
  increment: () => void;
  decrement: () => void;
}

interface Props {
  incrementBy: number;
}

const Counter: React.SFC<PropsFromState & PropsFromDispatch & Props> = (props) =>
(
  <p>
    Global count: {props.count}
    {' '}
    <button onClick={props.increment}>+</button>
    {' '}
    <button onClick={props.decrement}>-</button>
</p>
);

const mapStateToProps = (state: RootState): PropsFromState => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch, props: Props): PropsFromDispatch => ({
  decrement: () => { dispatch(CounterActions.decrement({ incrementBy: props.incrementBy})); },
  increment: () => { dispatch(CounterActions.increment({ incrementBy: props.incrementBy})); }
});

// connects the component to the flux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
