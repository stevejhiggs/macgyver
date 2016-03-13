import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LayoutView from './views/layout';
import HomeView from './views/home';
import AboutView from './views/about';
import NotFoundView from './views/notFound';

const routes = (
  <Route path="/" component={LayoutView}>
    <IndexRoute component={HomeView} />
    <Route path="about" component={AboutView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);

export default routes;
