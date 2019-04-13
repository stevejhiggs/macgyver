import React, { FunctionComponent, useState } from 'react';

interface State {
  count: number;
}

export interface Props {
  startVal: number;
}

const Counter: FunctionComponent<Props> = ({ startVal = 0 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setState is a function that accepts either a number or a function returning
  // a number
  const [state, setState] = useState<State>({count: startVal});

  function increment(by: number) {
    setState({ count: state.count + by });
  }

  function decrement(by: number) {
    setState({ count: state.count - by });
  }
  
  return <>
    <p>Clicked: {state.count} times</p>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => decrement(1)}>-</button>
  </>
}

export default Counter; 
