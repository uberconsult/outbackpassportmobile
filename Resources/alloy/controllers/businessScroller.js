function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.winBizScroller = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winBizScroller"
    });
    $.addTopLevelView($.__views.winBizScroller);
    var __alloyId0 = [];
    $.__views.scrBizScroller = Ti.UI.createScrollableView({
        views: __alloyId0,
        id: "scrBizScroller"
    });
    $.__views.winBizScroller.add($.__views.scrBizScroller);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.populateViewWithArray = function(regionsArray) {
        var len = regionsArray.length;
        for (var i = 0; i < len; i++) {
            var bizController = Alloy.createController("business");
            bizController.populateView(bizArray[i]);
            $.scrBizScroller.addView(bizController.getView());
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;