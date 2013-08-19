function Controller() {
    function stockItem(item) {
        var stock = vm.stock.levels;
        var stockItem = _.find(stock, function(stockItemFind) {
            return stockItemFind.name == item;
        });
        activeStockItem = item;
        $.stockTitle.text = "Stock " + item;
        $.stockLevel.text = stockItem.qty;
        $.stockSlider.value = stockItem.qty;
        $.stockSlider.addEventListener("change", sliderChanged);
        showStockOverlay();
    }
    function sliderChanged(e) {
        var stock = vm.stock.levels;
        var value = Math.round(e.value);
        $.stockLevel.text = value;
        var stockItem = _.find(stock, function(stockItemFind) {
            return stockItemFind.name == activeStockItem;
        });
        Ti.API.info("slider changed: " + stockItem);
        stockItem.qty = value;
        setDisplayStock(stock);
    }
    function showStockOverlay() {
        $.stockOverlayWrapper.visible = true;
    }
    function hideStockOverlay() {
        $.stockOverlayWrapper.visible = false;
        $.stockSlider.removeEventListener("change", sliderChanged);
        activeStockItem = void 0;
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
                itemControl.stockLevel.color = "white";
                Ti.API.info("there is stock");
            } else {
                itemControl.bg.backgroundColor = "red";
                itemControl.bg.opacity = .3;
                itemControl.stockLevel.color = "red";
                Ti.API.info("no stock");
            }
        });
    }
    function generateStockItems(stock) {
        var stockItemArgs = [ {
            name: "Sweets",
            height: 57
        }, {
            name: "Crisps",
            height: 56
        }, {
            name: "Cakes",
            height: 48
        }, {
            name: "Bottles",
            height: 82
        }, {
            name: "Cans",
            height: 72
        } ];
        _.each(stock, function(item) {
            var itemMatch = _.find(stockItemArgs, function(args) {
                return item.name == args.name;
            });
            var vendItem = Alloy.createController("vendItem", {
                width: 172,
                height: itemMatch.height,
                bottom: 4,
                item: item,
                click: stockItem
            });
            $.itemWrapper.add(vendItem.getView());
            stockItemControllers.push(vendItem);
        });
    }
    function windowFocused() {
        vm.switchMode(vm.modes.STOCK);
        setDisplayStock(vm.stock.levels);
    }
    function windowOpened() {
        var stock = vm.stock.levels;
        generateStockItems(stock);
        setDisplayStock(stock);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stock";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.stock = Ti.UI.createWindow({
        title: "Stock Machine",
        id: "stock"
    });
    $.__views.stock && $.addTopLevelView($.__views.stock);
    windowFocused ? $.__views.stock.addEventListener("focus", windowFocused) : __defers["$.__views.stock!focus!windowFocused"] = true;
    windowOpened ? $.__views.stock.addEventListener("open", windowOpened) : __defers["$.__views.stock!open!windowOpened"] = true;
    $.__views.__alloyId7 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        backgroundColor: "black",
        id: "__alloyId7"
    });
    $.__views.stock.add($.__views.__alloyId7);
    $.__views.machineWrapper = Ti.UI.createView({
        width: 292,
        height: 339,
        id: "machineWrapper"
    });
    $.__views.__alloyId7.add($.__views.machineWrapper);
    $.__views.machine = Ti.UI.createView({
        width: 180,
        height: 339,
        backgroundImage: "/images/stock.png",
        borderColor: "white",
        borderWidth: 2,
        id: "machine"
    });
    $.__views.machineWrapper.add($.__views.machine);
    $.__views.itemWrapper = Ti.UI.createView({
        width: 292,
        height: 339,
        layout: "vertical",
        top: 4,
        left: 0,
        id: "itemWrapper"
    });
    $.__views.machineWrapper.add($.__views.itemWrapper);
    $.__views.stockOverlayWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        visible: false,
        id: "stockOverlayWrapper"
    });
    $.__views.__alloyId7.add($.__views.stockOverlayWrapper);
    hideStockOverlay ? $.__views.stockOverlayWrapper.addEventListener("click", hideStockOverlay) : __defers["$.__views.stockOverlayWrapper!click!hideStockOverlay"] = true;
    $.__views.stockOverlayBg = Ti.UI.createView({
        opacity: .7,
        backgroundColor: "black",
        id: "stockOverlayBg"
    });
    $.__views.stockOverlayWrapper.add($.__views.stockOverlayBg);
    $.__views.stockOverlay = Ti.UI.createView({
        width: 280,
        height: 180,
        backgroundColor: "white",
        borderRadius: 8,
        layout: "vertical",
        bubbleParent: false,
        id: "stockOverlay"
    });
    $.__views.stockOverlayWrapper.add($.__views.stockOverlay);
    $.__views.stockTitle = Ti.UI.createLabel({
        top: 16,
        textAlign: "center",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        id: "stockTitle"
    });
    $.__views.stockOverlay.add($.__views.stockTitle);
    $.__views.stockSlider = Ti.UI.createSlider({
        top: 20,
        min: 0,
        max: 48,
        width: 250,
        id: "stockSlider"
    });
    $.__views.stockOverlay.add($.__views.stockSlider);
    $.__views.stockLevel = Ti.UI.createLabel({
        top: 16,
        textAlign: "center",
        font: {
            fontSize: 36,
            fontWeight: "bold"
        },
        id: "stockLevel"
    });
    $.__views.stockOverlay.add($.__views.stockLevel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var vm = Alloy.Globals.machine;
    var stockItemControllers = [];
    var activeStockItem;
    __defers["$.__views.stock!focus!windowFocused"] && $.__views.stock.addEventListener("focus", windowFocused);
    __defers["$.__views.stock!open!windowOpened"] && $.__views.stock.addEventListener("open", windowOpened);
    __defers["$.__views.stockOverlayWrapper!click!hideStockOverlay"] && $.__views.stockOverlayWrapper.addEventListener("click", hideStockOverlay);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;