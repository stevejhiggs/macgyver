import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../configureStore';
import routes from '../routes';

const wrapInHtml = (content, initialState) => (
  `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.reduxInitialState = ${JSON.stringify(initialState)}
        </script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
    `
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
    path: '/api',
    handler: function (request, reply) {
      var data = [
        {id:1, name: 'cat'},
        {id:2, name: 'dog'},
        {id:3, name: 'fish'}
      ];

      // just echo back
      reply(data);
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: (request, reply) => {
      const memoryHistory = createMemoryHistory(request.path);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      match({ history, routes, location: request.path }, (error, redirectLocation, renderProps) => {
        if (error) {
          return reply(error.message).code(500);
        }

        if (redirectLocation) {
          return reply.redirect(redirectLocation.pathname + redirectLocation.search);
        }

        if (renderProps) {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps}/>
            </Provider>
          )

          const initialState = store.getState();

          return reply(wrapInHtml(content, initialState));
        }

        reply.continue();
      });
    }
  });
};

export default registerServerRoutes;
