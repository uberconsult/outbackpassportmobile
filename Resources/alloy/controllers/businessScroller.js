function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.winBizScroller = Ti.UI.createWindow({
        id: "winBizScroller",
        title: "Details"
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
    var populateViewAndShow = function(bizArray, bizId) {
        var len = bizArray.length, showViewIndex = 0;
        for (var i = 0; i < len; i++) {
            var bizController = Alloy.createController("business");
            bizController.populateView(bizArray[i]);
            $.scrBizScroller.addView(bizController.getView());
            bizArray[i].getId == bizId && (showViewIndex = i);
        }
        $.scrBizScroller.currentPage = showViewIndex;
    };
    exports.selectViewByBizId = function(bizId) {
        var businessDAO = require("/dao/businessDAO"), businessArray = businessDAO.getBusinessesByBizId(bizId), len = businessArray.length, showViewIndex = 0;
        for (var i = 0; i < len; i++) {
            var bizController = Alloy.createController("business");
            bizController.populateView(businessArray[i]);
            $.scrBizScroller.addView(bizController.getView());
            bizId == businessArray[i].getId() && (showViewIndex = i);
        }
        $.scrBizScroller.scrollToView(showViewIndex);
    };
    Alloy.CFG.moveforward = !0;
    $.winBizScroller.addEventListener("blur", function(e) {
        Alloy.CFG.moveforward = !1;
    });
    $.winBizScroller.barColor = "#000";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;