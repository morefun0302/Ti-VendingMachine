/**
 * Simple Vending Machine Library
 * @author Julian Fraser
 */



// create the library object
function VendingMachine() {
    if(false === (this instanceof VendingMachine)) {
        return new VendingMachine();
    }
}

// set some values
var modes = {
        VEND: "vend",
        STOCK: "stock"
    },
    activeMode,
    currency = "GBP",
    coinDenominations = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00],
    coinBalance = 0.00,
    stock = [
        {
            name: "Sweets",
            qty: 10,
            price: 0.80
        },{
            name: "Crisps",
            qty: 0,
            price: 0.85
        },{
            name: "Cakes",
            qty: 10,
            price: 1.25
        },{
            name: "Bottles",
            qty: 10,
            price: 1.45
        },{
            name: "Cans",
            qty: 10,
            price: 0.95
        }
    ];

// suedo-constants for machine mode
VendingMachine.prototype.modes = modes;

// function handling switching between machine modes
VendingMachine.prototype.switchMode = function(mode) {
    // 
    switch(mode) {
        case modes.VEND:
            activeMode = mode;
            break;
        case modes.STOCK:
            activeMode = mode;
            break;
        default:
            alert("invalid mode set");
            break;
    }
};

// function handles vending an item, adjusting stock and coin balance
VendingMachine.prototype.vend = function(item, success, error) {
    //
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // return error if item is out of stock
    if (stockItem.qty < 1) {
        error({
            message: "Out of stock"
        });
        return false;
    }

    // return error if insufficient coin balance
    if (stockItem.price > coinBalance) {
        error({
            message: "Please insert more coins to make this purchase"
        });
        return false;
    }

    // remove 1 item from stock
    removeStock(item, 1);

    // adjust coin balance by subtracting item price
    coinBalance = (coinBalance - stockItem.price).toFixed(2);

    // return the success function
    success(coinBalance, stock);
};

// object handing coin balance and functions
VendingMachine.prototype.coin = {
    insert: insertCoin,
    eject: ejectCoins,
    balance: (function(){ return coinBalance; }())
};

// object handling stock level and functions
VendingMachine.prototype.stock = {
    add: addStock,
    remove: removeStock,
    levels: (function(){ return stock; }())
};

// inserts a coin into machine
function insertCoin(coin) {
    Ti.API.info('Inserting coin: ' + coin);

    // check the coin added matches an accepted denomination
    if (_.contains(coinDenominations, coin)) {
        // add the new coin to the balance
        coinBalance = (parseFloat(coinBalance) + parseFloat(coin)).toFixed(2);
    } else {
        alert("invalid coin inserted");
    }

    return coinBalance;
}

// ejects all coins inserted
function ejectCoins() {
    // eject coins leaves a zero balance
    coinBalance = 0.00;

    return coinBalance;
}

//
function bankCoin() {
    // TODO: implement bankCoin function to add to long term machine balance
}

//
function giveChange() {
	// TODO: implement giveChange function to handle giving change back to the customer
}

// add stock to machine
function addStock(item, qty) {
    // get reference to the correct object in stock array
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // remove a quantity from stock
    stockItem.qty += qty;
}

// remove stock from machine
function removeStock(item, qty) {
    // get reference to the correct object in stock array
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // remove a quantity from stock
    stockItem.qty -= qty;
}

// expose the vending machine object
module.exports = VendingMachine;