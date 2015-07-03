var Hapi = require('hapi');

// Create the Walmart Labs Hapi Server
var PORT = process.env.PORT || 8001;
var server = new Hapi.Server();
server.connection({ port: PORT });

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './public',
            listing: false,
            index: true
        }
    }
});

server.start(function () {
    console.log('Your hapi server is running on port:', PORT);
});
