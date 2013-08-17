/* args = {
 *		width: integer, // required
 *		height: integer, // required
 *		bottom: integer, // optional, default: 0
 * 		item: object, // required { name: "", qty: 0, price: 0.0 }
 *		click: function // required
 * }
 */
// assign the configuration parameters to a local variable. if none, use defaults
var args = arguments[0] || {};

// set item dimensions
$.item.width = args.width;
$.item.height = args.height;

// set item bottom property if specified in args
if (args.bottom !== undefined) { $.vendItem.bottom = args.bottom; }

// set text of labels
$.stockLevel.text = args.item.qty;
$.title.text = args.item.name;
$.price.text = Alloy.Globals.formatSterling(args.item.price);

// set name property to view handling the click event
$.item.name = args.item.name;

// handle clicks
function itemClicked(e) {
	Ti.API.info("vendItem clicked: " + JSON.stringify(e.source));

	// pass item name to function
	args.click(e.source.name);
}