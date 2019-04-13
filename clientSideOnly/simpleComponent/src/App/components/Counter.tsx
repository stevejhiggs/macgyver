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
  return <>
    <p>Clicked: {state.count} times</p>
    <button onClick={() => setState({ count: state.count + 1})}>+</button>
    <button onClick={() => setState({ count: state.count - 1})}>-</button>
  </>
}

export default Counter; 
