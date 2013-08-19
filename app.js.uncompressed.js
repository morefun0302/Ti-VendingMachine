var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var VendingMachine = require("VendingMachine");

Alloy.Globals.machine = new VendingMachine();

Alloy.Globals.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

Alloy.Globals.formatSterling = function(n) {
    return "₤" + parseFloat(Math.round(100 * n) / 100).toFixed(2);
};

Alloy.createController("index");