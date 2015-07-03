import {BaseStore} from 'fluxible/addons';

class StoryStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.stories = [];
    }
    getStories() {
        return this.stories;
    }
    setStories(json) {
        this.stories = json;
        this.emitChange();
    }
    dehydrate() {
        return {stories: this.stories};
    }
    rehydrate(state) {
        this.stories = state.stories;
    }
}

StoryStore.storeName = 'StoryStore';
StoryStore.handlers = {
    'STORIES_FETCH_SUCCESS'    : 'setStories'
};

export default StoryStore;