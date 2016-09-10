'use strict';

import Hapi from 'hapi';
import Good from 'good';
import Inert from 'inert';
import registerServerRoutes from './routes';

// Create a server with a host and port
const server = new Hapi.Server({
  connections: {
    routes: {
      cors: {
        credentials: true
      }
    }
  }
});

server.connection({
  host: '0.0.0.0',
  port: 8888
});

server.register([
  {
    register: Good,
    options: {
      ops: {
        interval: 1000,
      },
      reporters: {
        myConsoleReporter: [
          {
            module: 'good-console',
            args: [{ log: '*', error: '*', request: '*' }]
          }
        ]
      }
    }
  },
  Inert
], (err) => {
  if (err) {
    return server.log('error', err);
  }

  registerServerRoutes(server);

  server.start(() => {
    server.log(`Server started at ${server.info.uri}`);
  });
});
