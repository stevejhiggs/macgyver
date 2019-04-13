import React, { FunctionComponent, useContext } from 'react';
import { CounterContainer } from '../../state/CounterContainer';

export interface Props {
  incrementBy?: number;
}

const Counter: FunctionComponent<Props> = ({ incrementBy = 1 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setState is a function that accepts either a number or a function returning
  // a number
  const { increment, decrement, count } = useContext(CounterContainer.Context);
  
  return <>
    <p>Clicked: {count} times</p>
    <button onClick={() => increment(incrementBy)}>+</button>
    <button onClick={() => decrement(incrementBy)}>-</button>
  </>
}

export default Counter; 
