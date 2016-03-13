'use strict';

import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';
import Inert from 'inert';
import registerRoutes from './routes';

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
      opsInterval: 1000,
      reporters: [{
        reporter: GoodConsole,
        events: { log: '*', error: '*', request: '*' },
        config: {
        }
      }]
    }
  },
  Inert
], (err) => {
  if (err) {
    return server.log('error', err);
  }

  registerRoutes(server);

  server.start(() => {
    server.log(`Server started at ${server.info.uri}`);
  });
});
