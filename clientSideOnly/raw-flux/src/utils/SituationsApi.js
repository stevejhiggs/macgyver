var MacgyverActions = require('../actions/MacgyverActions.js');

module.exports = {
    getSituationsData: function () {
        var data = JSON.parse(localStorage.getItem('situations'));
        MacgyverActions.receiveSituations(data);
    }
};
