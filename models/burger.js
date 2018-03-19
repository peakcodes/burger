// Import the ORM file which will interact with database
var orm = require("../config/orm.js");

var burger = {
    all: function (burg) {
        orm.all("burgers", function (res) {
                burg(res);
        });
    },
    // Variables cols and vals are arrays
    create: function(cols, vals, burg) {
        orm.create("burgers", cols, vals, function(res) {
        burg(res);
        });
    },
    update: function(objColVals, condition, burg) {
       orm.update("burgers", objColVals, condition, function(res) {
        burg(res);
       });
    }
};

// Export database for controller burger_controller.js
module.exports = burger;
