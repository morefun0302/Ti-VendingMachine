// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


//
var VendingMachine = require('VendingMachine');

//
Alloy.Globals.machine = new VendingMachine();

// helper to validate variable is a number
Alloy.Globals.isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// helper to format a number to pounds sterling currency
Alloy.Globals.formatSterling = function(n) {
	return "\u20a4" + parseFloat(Math.round(n * 100) / 100).toFixed(2);
};