function Controller() {
    function showCoinSlot() {
        $.coinSlotOverlayWrapper.visible = true;
    }
    function insertCoin(e) {
        Ti.API.info("coin value: " + e.source.coinValue);
        var coinValue = e.source.coinValue;
        if (Alloy.Globals.isNumber(coinValue)) {
            var coinBalance = vm.coin.insert(coinValue);
            setDisplayBalance(coinBalance);
        } else alert("Coin value is not valid");
    }
    function purchaseItem(item) {
        vm.vend(item, vendSuccess, vendError);
    }
    function vendSuccess(balance, stock) {
        Ti.API.info("vend complete");
        setDisplayBalance(balance);
        setDisplayStock(stock);
    }
    function vendError(e) {
        Ti.API.error("vend failed");
        alert(e.message);
    }
    function hideCoinSlot() {
        $.coinSlotOverlayWrapper.visible = false;
    }
    function setDisplayBalance(balance) {
        var prettyBalance = Alloy.Globals.formatSterling(balance);
        if (balance > parseFloat(0)) {
            $.coinBalance.color = "green";
            $.coinSlotOverlayBalance.color = "black";
        } else {
            $.coinBalance.color = "red";
            $.coinSlotOverlayBalance.color = "red";
        }
        $.coinBalance.text = prettyBalance;
        $.coinSlotOverlayBalance.text = prettyBalance;
    }
    function setDisplayStock(stock) {
        _.each(stock, function(item) {
            var itemControl = _.find(stockItemControllers, function(controller) {
                return controller.item.name == item.name;
            });
            itemControl.stockLevel.text = item.qty;
            if (item.qty > 0) {
                itemControl.bg.backgroundColor = "green";
                itemControl.bg.opacity = .3;
                itemControl.stockLevel.color = "black";
            } else {
                itemControl.bg.backgroundColor = "red";
                itemControl.bg.opacity = .3;
                itemControl.stockLevel.color = "red";
            }
        });
    }
    function ejectCoins() {
        var coinBalance = vm.coin.eject();
        setDisplayBalance(coinBalance);
    }
    function windowFocused() {
        vm.switchMode(vm.modes.VEND);
        setDisplayStock(vm.stock.levels);
    }
    function generateStockItems(stock) {
        var stockItemArgs = [ {
            name: "Sweets",
            height: 38
        }, {
            name: "Crisps",
            height: 38
        }, {
            name: "Cakes",
            height: 32
        }, {
            name: "Bottles",
            height: 56
        }, {
            name: "Cans",
            height: 50
        } ];
        _.each(stock, function(item) {
            var itemMatch = _.find(stockItemArgs, function(args) {
                return item.name == args.name;
            });
            var vendItem = Alloy.createController("vendItem", {
                width: 116,
                height: itemMatch.height,
                bottom: 3,
                item: item,
                click: purchaseItem
            });
            $.itemWrapper.add(vendItem.getView());
            stockItemControllers.push(vendItem);
        });
    }
    function windowOpened() {
        ejectCoins();
        var stock = vm.stock.levels;
        generateStockItems(stock);
        setDisplayStock(stock);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vend = Ti.UI.createWindow({
        title: "Ready to Vend",
        id: "vend"
    });
    $.__views.vend && $.addTopLevelView($.__views.vend);
    windowFocused ? $.__views.vend.addEventListener("focus", windowFocused) : __defers["$.__views.vend!focus!windowFocused"] = true;
    windowOpened ? $.__views.vend.addEventListener("open", windowOpened) : __defers["$.__views.vend!open!windowOpened"] = true;
    $.__views.__alloyId8 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId8"
    });
    $.__views.vend.add($.__views.__alloyId8);
    $.__views.machineWrapper = Ti.UI.createView({
        width: 266,
        height: 343,
        id: "machineWrapper"
    });
    $.__views.__alloyId8.add($.__views.machineWrapper);
    $.__views.machine = Ti.UI.createView({
        width: 180,
        height: 343,
        backgroundImage: "/images/machine.png",
        id: "machine"
    });
    $.__views.machineWrapper.add($.__views.machine);
    $.__views.coinBalance = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: 28,
            fontWeight: "bold"
        },
        color: "red",
        text: "0.00",
        bottom: 13,
        id: "coinBalance"
    });
    $.__views.machine.add($.__views.coinBalance);
    $.__views.itemWrapper = Ti.UI.createView({
        width: 267,
        height: 340,
        layout: "vertical",
        top: 15,
        left: 0,
        id: "itemWrapper"
    });
    $.__views.machineWrapper.add($.__views.itemWrapper);
    $.__views.coinSlot = Ti.UI.createView({
        width: 26,
        height: 108,
        top: 52,
        right: 49,
        opacity: .3,
        backgroundColor: "green",
        id: "coinSlot"
    });
    $.__views.machineWrapper.add($.__views.coinSlot);
    showCoinSlot ? $.__views.coinSlot.addEventListener("click", showCoinSlot) : __defers["$.__views.coinSlot!click!showCoinSlot"] = true;
    $.__views.coinSlotOverlayWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        visible: false,
        id: "coinSlotOverlayWrapper"
    });
    $.__views.__alloyId8.add($.__views.coinSlotOverlayWrapper);
    hideCoinSlot ? $.__views.coinSlotOverlayWrapper.addEventListener("click", hideCoinSlot) : __defers["$.__views.coinSlotOverlayWrapper!click!hideCoinSlot"] = true;
    $.__views.coinSlotOverlayBg = Ti.UI.createView({
        opacity: .7,
        backgroundColor: "black",
        id: "coinSlotOverlayBg"
    });
    $.__views.coinSlotOverlayWrapper.add($.__views.coinSlotOverlayBg);
    $.__views.coinSlotOverlay = Ti.UI.createView({
        width: 290,
        height: 290,
        backgroundImage: "/images/coins.png",
        bubbleParent: false,
        id: "coinSlotOverlay"
    });
    $.__views.coinSlotOverlayWrapper.add($.__views.coinSlotOverlay);
    $.__views.coin1p = Ti.UI.createView({
        width: 53,
        height: 53,
        left: 4,
        top: 155,
        coinValue: .01,
        id: "coin1p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin1p);
    insertCoin ? $.__views.coin1p.addEventListener("click", insertCoin) : __defers["$.__views.coin1p!click!insertCoin"] = true;
    $.__views.coin2p = Ti.UI.createView({
        width: 65,
        height: 65,
        left: 71,
        top: 149,
        coinValue: .02,
        id: "coin2p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin2p);
    insertCoin ? $.__views.coin2p.addEventListener("click", insertCoin) : __defers["$.__views.coin2p!click!insertCoin"] = true;
    $.__views.coin5p = Ti.UI.createView({
        width: 47,
        height: 47,
        left: 154,
        top: 158,
        coinValue: .05,
        id: "coin5p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin5p);
    insertCoin ? $.__views.coin5p.addEventListener("click", insertCoin) : __defers["$.__views.coin5p!click!insertCoin"] = true;
    $.__views.coin10p = Ti.UI.createView({
        width: 62,
        height: 62,
        left: 219,
        top: 151,
        coinValue: .1,
        id: "coin10p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin10p);
    insertCoin ? $.__views.coin10p.addEventListener("click", insertCoin) : __defers["$.__views.coin10p!click!insertCoin"] = true;
    $.__views.coin20p = Ti.UI.createView({
        width: 55,
        height: 55,
        left: 4,
        bottom: 11,
        coinValue: .2,
        id: "coin20p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin20p);
    insertCoin ? $.__views.coin20p.addEventListener("click", insertCoin) : __defers["$.__views.coin20p!click!insertCoin"] = true;
    $.__views.coin50p = Ti.UI.createView({
        width: 69,
        height: 69,
        left: 67,
        bottom: 4,
        coinValue: .5,
        id: "coin50p"
    });
    $.__views.coinSlotOverlay.add($.__views.coin50p);
    insertCoin ? $.__views.coin50p.addEventListener("click", insertCoin) : __defers["$.__views.coin50p!click!insertCoin"] = true;
    $.__views.coin1pound = Ti.UI.createView({
        width: 58,
        height: 58,
        left: 149,
        bottom: 10,
        coinValue: 1,
        id: "coin1pound"
    });
    $.__views.coinSlotOverlay.add($.__views.coin1pound);
    insertCoin ? $.__views.coin1pound.addEventListener("click", insertCoin) : __defers["$.__views.coin1pound!click!insertCoin"] = true;
    $.__views.coin2pound = Ti.UI.createView({
        width: 71,
        height: 71,
        left: 216,
        bottom: 2,
        coinValue: 2,
        id: "coin2pound"
    });
    $.__views.coinSlotOverlay.add($.__views.coin2pound);
    insertCoin ? $.__views.coin2pound.addEventListener("click", insertCoin) : __defers["$.__views.coin2pound!click!insertCoin"] = true;
    $.__views.coinSlotOverlayBalance = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        textAlign: "left",
        font: {
            fontSize: 28,
            fontWeight: "bold"
        },
        color: "red",
        text: "0.00",
        top: 65,
        left: 10,
        id: "coinSlotOverlayBalance"
    });
    $.__views.coinSlotOverlay.add($.__views.coinSlotOverlayBalance);
    $.__views.coinSlotOverlayClose = Ti.UI.createButton({
        width: 80,
        height: 42,
        top: 10,
        left: 10,
        title: "Close",
        id: "coinSlotOverlayClose"
    });
    $.__views.coinSlotOverlay.add($.__views.coinSlotOverlayClose);
    hideCoinSlot ? $.__views.coinSlotOverlayClose.addEventListener("click", hideCoinSlot) : __defers["$.__views.coinSlotOverlayClose!click!hideCoinSlot"] = true;
    $.__views.coinEject = Ti.UI.createView({
        width: 32,
        height: 85,
        right: 112,
        top: 14,
        backgroundColor: "green",
        opacity: .4,
        id: "coinEject"
    });
    $.__views.coinSlotOverlay.add($.__views.coinEject);
    ejectCoins ? $.__views.coinEject.addEventListener("click", ejectCoins) : __defers["$.__views.coinEject!click!ejectCoins"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var vm = Alloy.Globals.machine;
    var stockItemControllers = [];
    __defers["$.__views.vend!focus!windowFocused"] && $.__views.vend.addEventListener("focus", windowFocused);
    __defers["$.__views.vend!open!windowOpened"] && $.__views.vend.addEventListener("open", windowOpened);
    __defers["$.__views.coinSlot!click!showCoinSlot"] && $.__views.coinSlot.addEventListener("click", showCoinSlot);
    __defers["$.__views.coinSlotOverlayWrapper!click!hideCoinSlot"] && $.__views.coinSlotOverlayWrapper.addEventListener("click", hideCoinSlot);
    __defers["$.__views.coin1p!click!insertCoin"] && $.__views.coin1p.addEventListener("click", insertCoin);
    __defers["$.__views.coin2p!click!insertCoin"] && $.__views.coin2p.addEventListener("click", insertCoin);
    __defers["$.__views.coin5p!click!insertCoin"] && $.__views.coin5p.addEventListener("click", insertCoin);
    __defers["$.__views.coin10p!click!insertCoin"] && $.__views.coin10p.addEventListener("click", insertCoin);
    __defers["$.__views.coin20p!click!insertCoin"] && $.__views.coin20p.addEventListener("click", insertCoin);
    __defers["$.__views.coin50p!click!insertCoin"] && $.__views.coin50p.addEventListener("click", insertCoin);
    __defers["$.__views.coin1pound!click!insertCoin"] && $.__views.coin1pound.addEventListener("click", insertCoin);
    __defers["$.__views.coin2pound!click!insertCoin"] && $.__views.coin2pound.addEventListener("click", insertCoin);
    __defers["$.__views.coinSlotOverlayClose!click!hideCoinSlot"] && $.__views.coinSlotOverlayClose.addEventListener("click", hideCoinSlot);
    __defers["$.__views.coinEject!click!ejectCoins"] && $.__views.coinEject.addEventListener("click", ejectCoins);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;