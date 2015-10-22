var React = require('react');
var MacgyverActions = require('../actions/MacgyverActions');

var Tool = React.createClass({
    checkAnswer: function () {
        this.props.onToolSelected(this.props.tool.id);
    },
    render: function () {
        return (
            <a href="#" className="list-group-item" onClick={this.checkAnswer}>{this.props.tool.name}</a>
        )
    }
});

module.exports = Tool;
