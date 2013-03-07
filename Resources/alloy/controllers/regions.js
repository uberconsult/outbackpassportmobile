function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.regions = Ti.UI.createWindow({
        id: "regions"
    });
    $.addTopLevelView($.__views.regions);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundImage: "background-right-image.jpg",
        id: "__alloyId0"
    });
    $.__views.regions.add($.__views.__alloyId0);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "outback-passport-logo.png",
        top: "30",
        height: "80"
    });
    $.__views.__alloyId0.add($.__views.logo);
    $.__views.dropdown = Ti.UI.createImageView({
        id: "dropdown",
        image: "region-select-dropdown.png",
        top: "135",
        height: "42"
    });
    $.__views.__alloyId0.add($.__views.dropdown);
    $.__views.region = Ti.UI.createLabel({
        text: "Please select region",
        top: "142",
        id: "region"
    });
    $.__views.__alloyId0.add($.__views.region);
    $.__views.button = Ti.UI.createImageView({
        id: "button",
        image: "view-business-button.png",
        bottom: "20",
        height: "42"
    });
    $.__views.__alloyId0.add($.__views.button);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "View Business Listing",
        bottom: "32",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true",
        visible: "false",
        bottom: "0"
    });
    $.__views.__alloyId0.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "Bananas",
        id: "__alloyId3"
    });
    $.__views.column1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "Strawberries",
        id: "__alloyId4"
    });
    $.__views.column1.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "Mangos",
        id: "__alloyId5"
    });
    $.__views.column1.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "Grapes",
        id: "__alloyId6"
    });
    $.__views.column1.addRow($.__views.__alloyId6);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pickerOpened = !1;
    $.dropdown.addEventListener("touchstart", function(e) {
        $.dropdown.setImage("region-select-dropdown-over.png");
    });
    $.dropdown.addEventListener("touchend", function(e) {
        $.dropdown.setImage("region-select-dropdown.png");
    });
    $.dropdown.addEventListener("click", function(e) {
        $.picker.setVisible(!0);
        pickerOpened = !0;
    });
    $.picker.addEventListener("change", function(e) {
        $.region.setText(e.column1);
        $.picker.setVisible(!1);
        pickerOpened = !1;
    });
    $.button.addEventListener("click", function(e) {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;