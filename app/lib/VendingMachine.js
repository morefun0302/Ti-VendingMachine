/**
 * @author Julian Fraser
 */



//
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

//
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

//
VendingMachine.prototype.vend = function(item, success, error) {
    //
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    //
    if (stockItem.qty < 1) {
        error({
            message: "Out of stock"
        });
        return false;
    }

    //
    if (stockItem.price > coinBalance) {
        error({
            message: "Please insert more coins to make this purchase"
        });
        return false;
    }

    // remove 1 item from stock
    removeStock(item, 1);

    //
    coinBalance = (coinBalance - stockItem.price).toFixed(2);

    //
    success(coinBalance, stock);
};

//
VendingMachine.prototype.coin = {
    insert: insertCoin,
    eject: ejectCoins,
    balance: (function(){ return coinBalance; }())
};

//
VendingMachine.prototype.stock = {
    add: addStock,
    remove: removeStock,
    levels: (function(){ return stock; }())
};

//
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

}

//
function addStock(item, qty) {
    // get reference to the correct object in stock array
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // remove a quantity from stock
    stockItem.qty += qty;
}

//
function removeStock(item, qty) {
    // get reference to the correct object in stock array
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // remove a quantity from stock
    stockItem.qty -= qty;
}

// expose the vending machine object
module.exports = VendingMachine;