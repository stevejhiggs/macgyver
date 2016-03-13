import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../configureStore';
import Routes from '../routes';

const HtmlWrapper = () => (
  <html>
  <head></head>
  <body>
    <div id="root">
    </div>
  </body>
  <script src="/js/bundle.js"></script>
  </html>
);

const registerServerRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
          path: 'public/generated/js',
          redirectToSlash: true,
          index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: (request, reply) => {
      const memoryHistory = createMemoryHistory(request.path);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      reply('<!doctype html>\n' + renderToString(<HtmlWrapper/>));
    }
  });
};

export default registerServerRoutes;
