function Controller() {
    function itemClicked(e) {
        args.click(e.source.name);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vendItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vendItem = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: 0,
        id: "vendItem"
    });
    $.__views.vendItem && $.addTopLevelView($.__views.vendItem);
    $.__views.stockLevel = Ti.UI.createLabel({
        width: 60,
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        textAlign: "left",
        id: "stockLevel"
    });
    $.__views.vendItem.add($.__views.stockLevel);
    $.__views.item = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "item"
    });
    $.__views.vendItem.add($.__views.item);
    itemClicked ? $.__views.item.addEventListener("click", itemClicked) : __defers["$.__views.item!click!itemClicked"] = true;
    $.__views.bg = Ti.UI.createView({
        opacity: .3,
        backgroundColor: "green",
        touchEnabled: false,
        id: "bg"
    });
    $.__views.item.add($.__views.bg);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        backgroundColor: "white",
        touchEnabled: false,
        left: 3,
        bottom: 3,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.item.add($.__views.title);
    $.__views.price = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        backgroundColor: "white",
        touchEnabled: false,
        right: 3,
        top: 3,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "price"
    });
    $.__views.item.add($.__views.price);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.vendItem.width = args.width + $.stockLevel.width;
    $.vendItem.height = args.height;
    $.item.width = args.width;
    $.item.height = args.height;
    void 0 !== args.bottom && ($.vendItem.bottom = args.bottom);
    $.stockLevel.text = args.item.qty;
    $.title.text = args.item.name;
    $.price.text = Alloy.Globals.formatSterling(args.item.price);
    $.item.name = args.item.name;
    __defers["$.__views.item!click!itemClicked"] && $.__views.item.addEventListener("click", itemClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;