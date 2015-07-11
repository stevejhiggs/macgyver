'use strict';
import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function () {},
    componentWillUnmount: function() {},

    render: function() {
        return (
        <div>
          <div className="container-fluid">
            <div className="page-header">
              <h1>MacGyver in the house</h1>
            </div>
            <p className="lead">stopping nuclear weapons with a paperclip, react.js and hapi.js</p>
          </div>

          <div className="footer">
            <div className="container">
              <p className="text-muted">decidedly work in progress</p>
            </div>
          </div>
        </div>
      );
    }
});
