import * as React from 'react';

export interface Props {
  startVal: number;
  counter:{
    count: number;
  },
  increment: any;
  decrement: any;
  incrementIfOdd: any;
}

export const Counter:React.SFC<Props> = (props: Props) =>
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <button onClick={props.increment}>+</button>
    {' '}
    <button onClick={props.decrement}>-</button>
  </p>;

export default Counter
