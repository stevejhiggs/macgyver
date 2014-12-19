/** @jsx React.DOM */

var React = require('react');
var MacgyverData = require('./data/MacgyverData');
var ToolsApi = require('./utils/ToolsApi');
var SituationsApi = require('./utils/SituationsApi')
var Game = require('./components/Game.jsx');
// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

MacgyverData.init();
ToolsApi.getToolsData();
SituationsApi.getSituationsData();


React.render(<Game/>, document.getElementById('App'));