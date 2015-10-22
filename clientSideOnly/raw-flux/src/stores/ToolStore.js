var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MacgyverConstants = require('../constants/MacgyverConstants');
var _ = require('underscore');

var _tools = {};

function loadToolsData(data) {
    _tools = data;
}

var ToolStore = _.extend({}, EventEmitter.prototype, {

    getTools: function () {
        return _tools;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case MacgyverConstants.RECEIVE_TOOLS_DATA:
            loadToolsData(action.data);
            break;
        default:
            return true;
    }

    ToolStore.emitChange();

    return true;
});

module.exports = ToolStore;
