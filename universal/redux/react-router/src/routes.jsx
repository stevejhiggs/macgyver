import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import LayoutView from './views/layout';
import HomeView from './views/home';
import AboutView from './views/about';
import NotFoundView from './views/notFound';

const routes = (props) => {
  /* history preserves browser history so things like the back button work */
  const { history, store } = props;

  // Create an enhanced history that syncs navigation events with the store
  const enhancedHistory = syncHistoryWithStore(history, store);

  return (
    <Router history={enhancedHistory}>
      <Route path="/" component={LayoutView}>
        <IndexRoute component={HomeView} />
        <Route path="about" component={AboutView} />
        <Route path="*" component={NotFoundView} />
      </Route>
    </Router>
  );
};

routes.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
};

export default routes;
