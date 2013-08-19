//
var vm = Alloy.Globals.machine;

// empty array for vending stock items
var stockItemControllers = [];

// declare some variables
var activeStockItem;

// handles changing stock levels of machine
function stockItem(item) {
	// get stock levels
	var stock = vm.stock.levels;
	
	// find matching 
	var stockItem = _.find(stock, function(stockItemFind, index) {
		return stockItemFind.name == item;
	});
	
	// set variable to save avtive item outside of this function
	activeStockItem = item;
	
	// set title and qty of the stock overlay
	$.stockTitle.text = "Stock " + item;
	$.stockLevel.text = stockItem.qty;
	
	// set the value of the slider
	$.stockSlider.value = stockItem.qty;
	
	//
	$.stockSlider.addEventListener("change", sliderChanged);
	
	// show the overlay
	showStockOverlay();
}

// handle change event of stock slider
function sliderChanged(e) {
	// get stock levels
	var stock = vm.stock.levels;
	
	// get slider value
	var value = Math.round(e.value);
	
	// set label text
	$.stockLevel.text = value;
	
	// find matching 
	var stockItem = _.find(stock, function(stockItemFind, index) {
		return stockItemFind.name == activeStockItem;
	});
	
	Ti.API.info("slider changed: " + stockItem);
	
	// set the new stock level
	stockItem.qty = value;
	
	// display stock levels
	setDisplayStock(stock);
}

// displays the stock overlay
function showStockOverlay() {
	// show the overlay to change stock in machine
	$.stockOverlayWrapper.visible = true;
}

// hides the stock overlay
function hideStockOverlay() {
	// show the overlay to change stock in machine
	$.stockOverlayWrapper.visible = false;
	
	//
	$.stockSlider.removeEventListener("change", sliderChanged);
	
	// clear the active stock item variable
	activeStockItem = undefined;
}

// sets display values and styling
function setDisplayStock(stock) {
	// loop through each stock item
	_.each(stock, function(item, index) {
		// find matching 
		var itemControl = _.find(stockItemControllers, function(controller, index) {
			return controller.item.name == item.name;
		});

		// set the stock level text
		itemControl.stockLevel.text = item.qty;

		// check if there is stock
		if (item.qty > 0) {
			// there is stock
			itemControl.bg.backgroundColor = "green";
			itemControl.bg.opacity = 0.3;
			itemControl.stockLevel.color = "white";

			Ti.API.info("there is stock");
		} else {
			// out of stock
			itemControl.bg.backgroundColor = "red";
			itemControl.bg.opacity = 0.3;
			itemControl.stockLevel.color = "red";
			
			Ti.API.info("no stock");
		}
	});
}

// runs once on window initial load
function generateStockItems(stock) {
	// array with matching name property to stock array, for setting height in this view
	var stockItemArgs = [
		{
            name: "Sweets",
            height: 57
        },{
            name: "Crisps",
            height: 56
        },{
            name: "Cakes",
            height: 48
        },{
            name: "Bottles",
            height: 82
        },{
            name: "Cans",
            height: 72
        }
	];
	
	// iterate through the stock object array
	_.each(stock, function(item, index) {
		// found matching item to set height parameter
		var itemMatch = _.find(stockItemArgs, function(args) {
			return item.name == args.name;
		});
		
		// create vending item controller
		var vendItem = Alloy.createController("vendItem", { 
			width: 172,
			height: itemMatch.height,
			bottom: 4,
			item: item,
			click: stockItem
		});
		
		// add view to wrapper
		$.itemWrapper.add(vendItem.getView());

		// add controller to array so we can search and manipulate later
		stockItemControllers.push(vendItem);
	});
}

// runs on window focus
function windowFocused() {
	// switch machine mode
	vm.switchMode(vm.modes.STOCK);

	// display stock levels
	setDisplayStock(vm.stock.levels);
}

// runs on window open
function windowOpened() {
	// get stock levels
	var stock = vm.stock.levels;

	// fill the machine with stock
	generateStockItems(stock);

	// display stock levels
	setDisplayStock(stock);
}