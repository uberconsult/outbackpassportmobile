function Controller() {
    function doClick(e) {
        var wRegions = Alloy.createController("regions").getView();
        $.open(wRegions, {
            animated: !0
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.view1 = Ti.UI.createView({
        id: "view1"
    });
    $.__views.index.add($.__views.view1);
    doClick ? $.__views.view1.addEventListener("swipe", doClick) : __defers["$.__views.view1!swipe!doClick"] = !0;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Outback Passport",
        id: "label"
    });
    $.__views.view1.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.view1!swipe!doClick"] && $.__views.view1.addEventListener("swipe", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;