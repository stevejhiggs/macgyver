var MacgyverActions = require('../actions/MacgyverActions.js');

module.exports = {

    getToolsData: function () {
        var data = JSON.parse(localStorage.getItem('tools'));
        MacgyverActions.receiveTools(data);
    }
};
