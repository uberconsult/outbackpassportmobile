function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.businessView = Ti.UI.createView({
        backgroundColor: "#F3F0EB",
        id: "businessView",
        width: "100%",
        height: "100%",
        layout: "vertical"
    });
    $.addTopLevelView($.__views.businessView);
    $.__views.bizImage = Ti.UI.createImageView({
        id: "bizImage",
        width: "100%",
        height: "35%",
        top: "0"
    });
    $.__views.businessView.add($.__views.bizImage);
    $.__views.scrContent = Ti.UI.createScrollView({
        id: "scrContent",
        top: "15",
        left: "20",
        width: "90%",
        height: "75%",
        layout: "vertical",
        showVerticalScrollIndicator: "true"
    });
    $.__views.businessView.add($.__views.scrContent);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.populateView = function(businessObject) {
        $.bizImage.image = businessObject.getBizImgDir();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;