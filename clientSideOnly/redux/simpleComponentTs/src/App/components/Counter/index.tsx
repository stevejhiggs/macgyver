import * as React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './actions';
import { bindActionCreators } from "redux"

export interface Props {
  startVal: number;
  counter:{
    count: number;
  },
  increment: any;
  decrement: any;
  incrementIfOdd: any;
}

const Counter:React.SFC<Props> = (props: Props) =>
  <p>
    Clicked: {props.counter.count} times
    {' '}
    <button onClick={props.increment}>+</button>
    {' '}
    <button onClick={props.decrement}>-</button>
    {' '}
    <button onClick={props.incrementIfOdd}>Increment if odd</button>
  </p>;



// connects the component to the flux store
export default connect<any, any, any>(state => ({ counter: state.counter }), CounterActions )(Counter);
