import * as React from 'react';
import * as CounterActions from '../../../../state/count/actions';

export interface Props {
  incrementBy: number;
  counter: {
    count: number;
  };
  increment: typeof CounterActions.increment;
  decrement: typeof CounterActions.decrement;
}

export const Counter: React.SFC<Props> = (props: Props) =>
(
  <p>
    Global count: {props.counter.count}
    {' '}
    <button onClick={() => { props.increment({incrementBy: props.incrementBy}); }}>+</button>
    {' '}
    <button onClick={() => { props.decrement({incrementBy: props.incrementBy}); }}>-</button>
</p>
);

export default Counter;
