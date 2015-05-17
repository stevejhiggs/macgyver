import React from 'react';
import Fluxible from 'fluxible';
import Application from './components/Application';
import RouteStore from './stores/RouteStore';
import ApplicationStore from './stores/ApplicationStore';
import CountStore from './stores/CountStore';
import StoryStore from './stores/StoryStore';

let app = new Fluxible({
    component: Application,
    stores: [
        RouteStore,
        ApplicationStore,
        CountStore,
        StoryStore
    ]
});

export default app;