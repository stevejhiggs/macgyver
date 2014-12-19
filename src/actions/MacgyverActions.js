var AppDispatcher = require('../dispatcher/AppDispatcher');
var MacgyverConstants = require('../constants/MacgyverConstants');

var MacgyverActions = {
	receiveTools: function(data) {
		AppDispatcher.handleViewAction({
    		actionType: MacgyverConstants.RECEIVE_TOOLS_DATA,
      		data: data
    	});
	},
	receiveSituations: function(data) {
		AppDispatcher.handleViewAction({
    		actionType: MacgyverConstants.RECEIVE_SITUATIONS_DATA,
      		data: data
    	});
	}
};

module.exports = MacgyverActions;