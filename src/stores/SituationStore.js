var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MacgyverConstants = require('../constants/MacgyverConstants');
var _ = require('underscore');

var _situations = {}, _current = null, _currentIndex = null;

function loadSituationsData(data) {
	_situations = _.shuffle(data);
	_currentIndex = 0;
	_current = data[_currentIndex];
}

var SituationStore = _.extend({}, EventEmitter.prototype, {

  	getSituations: function() {
    	return _situations;
 	},

  	getCurrent: function(){
    	return _current;
  	},

  	emitChange: function() {
    	this.emit('change');
  	},

  	addChangeListener: function(callback) {
    	this.on('change', callback);
  	},

  	removeChangeListener: function(callback) {
    	this.removeListener('change', callback);
  	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType) {
		case MacgyverConstants.RECEIVE_SITUATIONS_DATA:
			loadSituationsData(action.data);
			break;
		default:
			return true;
	}

	SituationStore.emitChange();

	return true;
});

module.exports = SituationStore;