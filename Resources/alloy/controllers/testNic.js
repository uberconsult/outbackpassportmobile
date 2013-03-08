function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.testnic = Ti.UI.createWindow({
        id: "testnic"
    });
    $.addTopLevelView($.__views.testnic);
    $.__views.__alloyId4 = Ti.UI.createView({
        id: "__alloyId4"
    });
    $.__views.testnic.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Test Nic",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.moveforward = !0;
    $.testnic.addEventListener("blur", function(e) {
        Alloy.CFG.moveforward = !1;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;