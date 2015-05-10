'use strict';

//I run on the server and provide the initial page load

require('babel/register');
var express = require('express');
var favicon = require('serve-favicon');
var serialize = require('serialize-javascript');
var navigateAction = require('fluxible-router').navigateAction;
var debug = require('debug')('Example');
var React = require('react');
var app = require('./src/app');
var HtmlComponent = React.createFactory(require('./src/components/Html.jsx'));

var server = express();
//server.use(favicon(__dirname + '/../favicon.ico'));
server.use('/public', express.static(__dirname + '/public'));

server.use(function(req, res, next) {
    var context = app.createContext();

    debug('Executing navigate action');

    //get the correct context given the url
    context.executeAction(navigateAction, { url: req.url }, function (err) {
        if (err) {
            if (err.statusCode && err.statusCode === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        //put a json representation of the state in the client
        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        var Component = app.getComponent();

        var html = React.renderToStaticMarkup(HtmlComponent({
            state: exposed,
            markup: React.renderToString(context.createElement()),
            context: context.getComponentContext()
        }));

        debug('Sending markup');
        res.send(html);
    });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);