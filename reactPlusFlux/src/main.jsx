var React = require('react');
var MacgyverData = require('./data/MacgyverData');
var ToolsApi = require('./utils/ToolsApi');
var SituationsApi = require('./utils/SituationsApi')
var Game = require('./components/Game.jsx');

MacgyverData.init();
ToolsApi.getToolsData();
SituationsApi.getSituationsData();


React.render(<Game/>, document.getElementById('App'));