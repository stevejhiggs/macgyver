import * as React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from '../../state/CounterContainer';

interface Props {
  incrementBy: number;
}

const Counter: React.SFC<Props> = (props) => (
  <Subscribe to={[CounterContainer]}>
    {(counter: CounterContainer) => (
      <div>
        <button onClick={() => counter.decrement(props.incrementBy)}>-</button>
        <span>{counter.state.count}</span>
        <button onClick={() => counter.increment(props.incrementBy)}>+</button>
      </div>
    )}
  </Subscribe>
);

export default Counter;

