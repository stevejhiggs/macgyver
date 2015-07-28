import Marty from 'marty';
import Constants from '../constants/counterConstants';

export default class CounterStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.state = { count: 0 };
        this.handlers = {
            incrementCount: Constants.INCREMENT_COUNT
        };
    }

    incrementCount(incrementBy) {
        this.state.count += incrementBy;
        this.hasChanged();
    }

    getCount() {
        return this.state.count;
    }
}