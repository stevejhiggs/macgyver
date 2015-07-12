'use strict';

require('babel/register');

var React = require('react');
var Hapi = require('hapi');

var reactRouteHandler = require('./reactRouteHandler')(
    require('./reactApp/app.js'),
    React.createFactory(require('./reactApp/components/Html.jsx'))
);

var server = new Hapi.Server();
server.connection({port: process.env.PORT || 3000});

//standard hapi call
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('don\'t worry, be hapi!');
    }
});

//pubic files
server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: './public',
            listing: true,
            index: true
        }
    }
});

//if hapi itself can't handle the route then let reacts router take a crack at it
server.route({
    method: '*',
    path: '/{param*}',
    config: {
        handler: reactRouteHandler.handler,
    }
});

server.start(function () {
    console.log('Server running at: ' + server.info.uri);
});