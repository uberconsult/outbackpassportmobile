function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    $.__views.frontpage = Ti.UI.createView({
        id: "frontpage",
        backgroundImage: "outback-passport-app-page1.jpg"
    });
    $.__views.win1.add($.__views.frontpage);
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.win1,
        id: "navgroup"
    });
    $.__views.index.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.mainWin = $.index;
    Alloy.CFG.navgroup = $.navgroup;
    $.win1.addEventListener("swipe", function(e) {
        $.navgroup.open(Alloy.createController("regions").getView());
    });
    Alloy.CFG.navgroup.top = -43;
    $.index.barColor = "#000";
    Ti.Platform.osname === "iphone" ? $.index.open({
        transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    }) : $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;