'use strict';
var React = require('react');
var serialize = require('serialize-javascript');
var navigateAction = require('fluxible-router').navigateAction;
var debug = require('debug')('Example');

module.exports = function(app, component) {
  var handler = function(req, reply) {
    debug('Checking if the route can be served by the react routing table');
    var context = app.createContext();

    debug('Executing navigate action');
    context.executeAction(navigateAction, { url: req.path }, function (err) {
      if (err) {
        if (err.statusCode && err.statusCode === 404) {
          debug('No match found in the react routing table');
          return reply.continue();
        }
        next(err);
      }

      debug('Match found in the react routing table');

      debug('Exposing context state');
      var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

      debug('Rendering Application component into html');
      var html = React.renderToStaticMarkup(component({
        state: exposed,
        markup: React.renderToString(context.createElement()),
        context: context.getComponentContext()
      }));

      debug('Sending markup');
      return reply(html);

    });
  }

  return {
    handler: handler
  }
};
