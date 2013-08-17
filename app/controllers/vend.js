// local variable for our machine
var vm = Alloy.Globals.machine;

// empty array for vending stock items
var stockItemControllers = [];

// displays the coin slot overlay
function showCoinSlot() {
	// show the overlay to insert coins into machine
	$.coinSlotOverlayWrapper.visible = true;
}

// handles inserting of coin into machine
function insertCoin(e) {
	//Ti.API.info("insert coin: " + JSON.stringify(e));

	Ti.API.info("coin value: " + e.source.coinValue);

	var coinValue = e.source.coinValue;

	if (Alloy.Globals.isNumber(coinValue)) {
		//
		var coinBalance = vm.coin.insert(coinValue);

		// set text of balance labels
		setDisplayBalance(coinBalance);
	} else {
		// feedback that something is wrong
		alert("Coin value is not valid");
	}
}

// handles vending clicks
function purchaseItem(item) {
	// make purchase
	vm.vend(item, vendSuccess, vendError);
}

// handle successful vend transaction
function vendSuccess(balance, stock) {
	Ti.API.info("vend complete");

	// update the inserted coins balance
	setDisplayBalance(balance);

	// update the stock level display
	setDisplayStock(stock);
}

// handles error in vending transaction
function vendError(e) {
	Ti.API.error("vend failed");

	alert(e.message);
}

// hides the coin insertig overlay
function hideCoinSlot() {
	// hide the coin slot overlay
	$.coinSlotOverlayWrapper.visible = false;
}

// sets the current coin balance on UI labels
function setDisplayBalance(balance) {
	// format the balance with currency symbol and 2 decimal places
	var prettyBalance = Alloy.Globals.formatSterling(balance);

	// set color of balance label according to whether coins are inserted
	if (balance > parseFloat(0)) {
		// coins are inserted
		$.coinBalance.color = "green";
		$.coinSlotOverlayBalance.color = "black";
	} else {
		// no coins inserted
		$.coinBalance.color = "red";
		$.coinSlotOverlayBalance.color = "red";
	}

	// set the coin balance displays
	$.coinBalance.text = prettyBalance;
	$.coinSlotOverlayBalance.text = prettyBalance;
}

//
function setDisplayStock(stock) {
	//
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
			itemControl.stockLevel.color = "black";

			Ti.API.info("there is stock");
		} else {
			// out of stock
			itemControl.bg.backgroundColor = "red";
			itemControl.stockLevel.color = "red";
			
			Ti.API.info("no stock");
		}
	});
}

// handles ejecting all user coins
function ejectCoins() {
	// eject all coins from machine
	var coinBalance = vm.coin.eject();

	// set text of balance labels
	setDisplayBalance(coinBalance);
}


// runs on window focus
function windowFocused() {
	vm.switchMode(vm.modes.VEND);
}

// runs once on window initial load
function generateStockItems(stock) {
	// array with matching name property to stock array, for setting height in this view
	var stockItemArgs = [
		{
            name: "Sweets",
            height: 38
        },{
            name: "Crisps",
            height: 38
        },{
            name: "Cakes",
            height: 32
        },{
            name: "Bottles",
            height: 56
        },{
            name: "Cans",
            height: 50
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
			width: 116,
			height: itemMatch.height,
			bottom: 3,
			item: item,
			click: purchaseItem
		});

		// add controller to array so we can search and manipulate later
		stockItemControllers.push(vendItem);

		// add view to wrapper
		$.itemWrapper.add(vendItem.getView());
	});
}

//
function windowOpened() {
	// reset the balance on initial load
	ejectCoins();

	// get stock levels
	var stock = vm.stock.levels;

	// fill the machine with stock
	generateStockItems(stock);

	// display stock levels
	setDisplayStock(stock);
}