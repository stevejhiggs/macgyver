var React = require('react');
var MacgyverActions = require('../actions/MacgyverActions');

var Tool = React.createClass({
	render: function() {
		return (
			<div className="tool">
				<h4>{this.props.tool.name}</h4>
			</div>
			)
	}
});

module.exports = Tool;