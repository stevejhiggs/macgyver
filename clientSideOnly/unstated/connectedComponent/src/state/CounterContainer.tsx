import { Container } from 'unstated';

interface CounterState {
  count: number;
}
  
export default class CounterContainer extends Container<CounterState> {
  state = {
    count: 0
  };

  increment(by: number) {
    this.setState({ count: this.state.count + by });
  }

  decrement(by: number) {
    this.setState({ count: this.state.count - by });
  }
}
