import React from 'react';
import Counter from './counter';

export default React.createClass({
    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {},
    componentWillUnmount: function componentWillUnmount() {},

    render: function render() {
        return (
        <div>
          <div className="container-fluid">
            <div className="page-header">
              <h1>MacGyver in the house</h1>
            </div>
            <p className="lead">stopping nuclear weapons with a paperclip, react.js and hapi.js</p>
              <Counter startVal={5} />
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
