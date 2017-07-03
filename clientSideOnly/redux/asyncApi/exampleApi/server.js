var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server({
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
  port: 8000
});


server.route({
  method: 'GET',
  path: '/',
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

server.start(function () {
  console.info('api server started at ' + server.info.uri);
});
