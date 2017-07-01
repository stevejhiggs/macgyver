import * as React from 'react';
import * as CounterActions from '../../../../state/counter/actions';

export interface Props {
  startVal: number;
  counter: {
    count: number;
  };
  increment: typeof CounterActions.increment;
  decrement: typeof CounterActions.decrement;
}

export const Counter: React.SFC<Props> = (props: Props) =>
(
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <button onClick={() => { props.increment(); }}>+</button>
    {' '}
    <button onClick={() => { props.decrement(); }}>-</button>
</p>
);

export default Counter;
