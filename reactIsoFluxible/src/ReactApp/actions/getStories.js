import fetch from 'isomorphic-fetch';

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }
    throw new Error(response.statusText)
}

function json(response) {
    return response.json()
}

export default function (context, payload) {
    context.dispatch('STORIES_FETCH_START', payload);

    return fetch('//offline-news-api.herokuapp.com/stories')
        .then(status)
        .then(json)
        .then(function(json) {
            context.dispatch('STORIES_FETCH_SUCCESS', json);
        }).catch(function(error) {
            context.dispatch('STORIES_FETCH_FAIL', error);
        });
};

