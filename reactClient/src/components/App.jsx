'use strict';
var React = require('react');

var App = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function () {},
    componentWillUnmount: function() {},

    render: function() {
      return (
        <div>
          <div class="container-fluid">
            <div class="page-header">
              <h1>MacGyver in the house</h1>
            </div>
            <p class="lead">stopping nuclear weapons with a paperclip, react.js and hapi.js</p>
          </div>

          <div class="footer">
            <div class="container">
              <p class="text-muted">decidedly work in progress</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = App;