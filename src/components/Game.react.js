var React = require('react');
var MacgyverActions = require('../actions/MacgyverActions');
var SituationStore = require('../stores/SituationStore');
var ToolStore = require('../stores/ToolStore');
var Situation = require('./Situation.react');
var Tool = require('./Tool.react');
var _ = require('underscore');

function getGameState() {
	var situations = _.shuffle(SituationStore.getSituations());
	var currentSituation = SituationStore.getCurrent();
	var tools = ToolStore.getTools();
	return {
		situations: situations,
		currentSituation: currentSituation,
		tools: tools
	};
}

var Game = React.createClass({

	getInitialState: function() {
		return getGameState();
	},
	handleToolSelected: function(id) {
		console.log(id);
	},
	componentDidMount: function () {
		SituationStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		SituationStore.removeChangeListener(this._onChange);
	},
	render: function() {
		return (
		<div className="macgyver-game">
			<div className="col-sm-8">
				<Situation currentSituation={this.state.currentSituation} />
			</div>
			<div className="col-sm-4">
				<div className="list-group">
				{this.state.tools.map(function(t) {
					return <Tool onToolSelected={this.handleToolSelected} tool={t} />;
				}, this)}
				</div>
			</div>
		</div>
		);
	},
	_onChange: function() {
		this.setState(getGameState());
	}
});

module.exports = Game;