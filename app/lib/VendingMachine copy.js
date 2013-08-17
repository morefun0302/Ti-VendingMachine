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
    coinBalance = parseFloat(0),
    stock = [
        {
            name: "Sweets",
            qty: 10,
            price: parseFloat(0.80)
        },{
            name: "Crisps",
            qty: 0,
            price: parseFloat(0.85)
        },{
            name: "Cakes",
            qty: 10,
            price: parseFloat(1.25)
        },{
            name: "Bottles",
            qty: 10,
            price: parseFloat(1.45)
        },{
            name: "Cans",
            qty: 10,
            price: parseFloat(0.95)
        }
    ];

// suedo-constants for machine mode
VendingMachine.prototype.modes = modes;

//
VendingMachine.prototype.switchMode = function(mode) {
    Ti.API.info('Switching mode to: ' + mode);

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

    Ti.API.info('Active mode is: ' + activeMode);
}

//
VendingMachine.prototype.vend = function(item, success, error) {
    Ti.API.info('Vending: ' + item);

    //
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    Ti.API.info('stockItem: ' + JSON.stringify(stockItem));

    Ti.API.info('stockItem.qty: ' + stockItem.qty);

    Ti.API.info('stockItem.qty type: ' + typeof stockItem.qty);


    //
    if (stockItem.qty < 1) {
        error({
            message: "Out of stock"
        });
        return false;
    }

    Ti.API.info('Price ' + stockItem.price);
    Ti.API.info('Balance ' + coinBalance);
    Ti.API.info('Compare' + (coinBalance == stockItem.price));

    //
    if (stockItem.price > coinBalance) {
        error({
            message: "Please insert more coins to make this purchase"
        });
        return false;
    }

    Ti.API.info('There are ' + stockItem.qty + " in stock");

    // remove 1 item from stock
    removeStock(item, 1);

    //
    coinBalance = (parseFloat(coinBalance) - parseFloat(stockItem.price)).toFixed(2);

    Ti.API.info('coinBalance: ' + coinBalance);

    //
    success(coinBalance, stock);
}

//
VendingMachine.prototype.coin = {
    insert: insertCoin,
    eject: ejectCoins,
    balance: (function(){ return coinBalance }())
}

//
VendingMachine.prototype.stock = {
    add: addStock,
    remove: removeStock,
    levels: (function(){ return stock }())
}

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

    Ti.API.info('coinBalance: ' + coinBalance);

    return coinBalance;
}

// ejects all coins inserted
function ejectCoins() {
    // eject coins leaves a zero balance
    coinBalance = parseFloat(0);

    Ti.API.info('coinBalance: ' + coinBalance);

    return coinBalance;
}

//
// function getCoinBalance() {
//     return coinBalance;
// }

//
function bankCoin() {
    // TODO: implement bankCoin function to add to long term machine balance
}

//
function giveChange() {

}

//
function addStock() {

}

//
function removeStock(item, qty) {
    // get reference to the correct object in stock array
    var stockItem = _.find(stock, function(i){ return item === i.name; });

    // remove a quantity from stock
    stockItem.qty -= qty;

    Ti.API.info('Now there are ' + stockItem.qty + " in stock");
}

// expose the vending machine object
module.exports = VendingMachine;