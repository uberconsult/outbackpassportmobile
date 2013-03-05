function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.regions = Ti.UI.createView({
        backgroundColor: "white",
        id: "regions"
    });
    $.addTopLevelView($.__views.regions);
    $.__views.label = Ti.UI.createLabel({
        text: "Regions List",
        id: "label"
    });
    $.__views.regions.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;