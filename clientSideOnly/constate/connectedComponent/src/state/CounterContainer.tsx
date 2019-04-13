import { useState } from 'react';
import createContainer from 'constate';

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = (by: number) => setCount(prevCount => prevCount + by);
  const decrement = (by: number) => setCount(prevCount => prevCount - by);
  return { 
    count, 
    increment,
    decrement
  };
}

export const CounterContainer = createContainer(useCounter);
