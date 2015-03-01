var Hapi = require('hapi');

// Create the Walmart Labs Hapi Server
var PORT = process.env.PORT || 8002;
var server = new Hapi.Server();
server.connection({ port: PORT });

server.route(
    {
        method: 'GET',
        path: '/comments',
        handler: function(request, reply) {
            reply([
                {"id":"1", "author": "Pete Huntbb", "text": "This is one comment"},
                {"id":"2", "author": "Jordan Walke", "text": "This is *another* comment"}
            ]);
        }
    });

server.route(
    {
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
