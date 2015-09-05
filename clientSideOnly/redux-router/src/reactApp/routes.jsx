import React from 'react';
import { Route } from 'react-router';
import LayoutView from './views/layout';
import HomeView from './views/home';
import AboutView from './views/about';

export default (
    <Route component={LayoutView}>
        <Route path="/" component={HomeView}/>
        <Route path="/about" component={AboutView}/>
    </Route>
);