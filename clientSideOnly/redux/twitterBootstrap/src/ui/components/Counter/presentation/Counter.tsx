import * as React from 'react';
import * as CounterActions from '../../../../state/count/actions';
import { Button } from 'react-bootstrap';

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
    <Button bsStyle="success" onClick={() => { props.increment({incrementBy: props.incrementBy}); }}>+</Button>
    {' '}
    <Button bsStyle="warning" onClick={() => { props.decrement({incrementBy: props.incrementBy}); }}>-</Button>
</p>
);

export default Counter;
