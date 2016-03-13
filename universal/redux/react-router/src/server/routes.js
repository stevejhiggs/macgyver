import React from 'react';
import { renderToString } from 'react-dom/server';

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

const registerRoutes = (server) => {
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
      reply('<!doctype html>\n' + renderToString(<HtmlWrapper/>));
    }
  });
};

export default registerRoutes;
