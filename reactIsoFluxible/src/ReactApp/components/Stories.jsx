import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import StoryStore from '../stores/StoryStore';
import getStoriesAction from '../actions/getStories';

class Stories extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    componentWillMount() {
        this.context.executeAction(getStoriesAction);
    }

    render() {
        var stories = this.props.stories;

        if (!stories.length) {
            return <p>No stories</p>
        }

        var storyItems = stories.map(function (story) {
            return (
                <li>
                    <h2>{story.title}</h2>
                    <h3>{story.author}</h3>
                    <p dangerouslySetInnerHTML={{__html: story.body}}></p>
                 </li>
            );
        }, this);

        return <ul id="story-list">{storyItems}</ul>;
    }
}

//auto binds the props to the store
Stories = connectToStores(Stories, [StoryStore], function (stores, props) {
    return {
        stories: stores.StoryStore.getStories()
    };
});

export default Stories;