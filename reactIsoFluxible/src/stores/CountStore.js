import {BaseStore} from 'fluxible/addons';

class CountStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.count = 0;
    }
    incrementCount(payload) {
        this.count  += payload.incValue;
        this.emitChange();
    }
    getCount() {
        return this.count;
    }
    dehydrate() {
        return {count: this.count};
    }
    rehydrate(state) {
        this.count = state.count;
    }
}

CountStore.storeName = 'CountStore'; // PR open in dispatchr to remove this need
CountStore.handlers = {
    'INCREMENT_COUNT'    : 'incrementCount'
};

export default CountStore;