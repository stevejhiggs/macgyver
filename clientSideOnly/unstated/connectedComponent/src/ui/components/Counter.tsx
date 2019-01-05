import * as React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from '../../state/CounterContainer';

interface Props {
  incrementBy: number;
}

const Counter: React.SFC<Props> = (props) => (
  <Subscribe to={[CounterContainer]}>
    {(counterState: CounterContainer) => (
      <div>
        <button onClick={() => counterState.decrement(props.incrementBy)}>-</button>
        <span>{counterState.state.count}</span>
        <button onClick={() => counterState.increment(props.incrementBy)}>+</button>
      </div>
    )}
  </Subscribe>
);

export default Counter;

