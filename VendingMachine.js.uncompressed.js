function VendingMachine() {
    if (false == this instanceof VendingMachine) return new VendingMachine();
}

function insertCoin(coin) {
    Ti.API.info("Inserting coin: " + coin);
    _.contains(coinDenominations, coin) ? coinBalance = (parseFloat(coinBalance) + parseFloat(coin)).toFixed(2) : alert("invalid coin inserted");
    return coinBalance;
}

function ejectCoins() {
    coinBalance = 0;
    return coinBalance;
}

function bankCoin() {}

function giveChange() {}

function addStock(item, qty) {
    var stockItem = _.find(stock, function(i) {
        return item === i.name;
    });
    stockItem.qty += qty;
}

function removeStock(item, qty) {
    var stockItem = _.find(stock, function(i) {
        return item === i.name;
    });
    stockItem.qty -= qty;
}

var modes = {
    VEND: "vend",
    STOCK: "stock"
}, activeMode, currency = "GBP", coinDenominations = [ .01, .02, .05, .1, .2, .5, 1, 2 ], coinBalance = 0, stock = [ {
    name: "Sweets",
    qty: 10,
    price: .8
}, {
    name: "Crisps",
    qty: 0,
    price: .85
}, {
    name: "Cakes",
    qty: 10,
    price: 1.25
}, {
    name: "Bottles",
    qty: 10,
    price: 1.45
}, {
    name: "Cans",
    qty: 10,
    price: .95
} ];

VendingMachine.prototype.modes = modes;

VendingMachine.prototype.switchMode = function(mode) {
    switch (mode) {
      case modes.VEND:
        activeMode = mode;
        break;

      case modes.STOCK:
        activeMode = mode;
        break;

      default:
        alert("invalid mode set");
    }
};

VendingMachine.prototype.vend = function(item, success, error) {
    var stockItem = _.find(stock, function(i) {
        return item === i.name;
    });
    if (1 > stockItem.qty) {
        error({
            message: "Out of stock"
        });
        return false;
    }
    if (stockItem.price > coinBalance) {
        error({
            message: "Please insert more coins to make this purchase"
        });
        return false;
    }
    removeStock(item, 1);
    coinBalance = (coinBalance - stockItem.price).toFixed(2);
    success(coinBalance, stock);
};

VendingMachine.prototype.coin = {
    insert: insertCoin,
    eject: ejectCoins,
    balance: function() {
        return coinBalance;
    }()
};

VendingMachine.prototype.stock = {
    add: addStock,
    remove: removeStock,
    levels: function() {
        return stock;
    }()
};

module.exports = VendingMachine;