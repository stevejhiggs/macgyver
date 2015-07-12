var React = require('react');
var MacgyverActions = require('../actions/MacgyverActions');

var Situation = React.createClass({
	render: function() {
		return (
			<div className="situation">
				<h4>{this.props.currentSituation.name}</h4>
				<p>{this.props.currentSituation.description}</p>
			</div>
			)
	}
});

module.exports = Situation;