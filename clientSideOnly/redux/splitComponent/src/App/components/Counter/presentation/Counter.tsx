import * as React from 'react';
import { EmptyActionCreator } from 'typescript-fsa';

export interface Props {
  startVal: number;
  counter: {
    count: number;
  };
  increment: EmptyActionCreator;
  decrement: EmptyActionCreator;
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
