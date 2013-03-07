function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.regions = Ti.UI.createWindow({
        id: "regions"
    });
    $.addTopLevelView($.__views.regions);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundImage: "background-right-image.jpg",
        id: "__alloyId14"
    });
    $.__views.regions.add($.__views.__alloyId14);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "outback-passport-logo.png",
        top: "30",
        height: "80"
    });
    $.__views.__alloyId14.add($.__views.logo);
    $.__views.dropdown = Ti.UI.createImageView({
        id: "dropdown",
        image: "region-select-dropdown.png",
        top: "135",
        height: "42"
    });
    $.__views.__alloyId14.add($.__views.dropdown);
    $.__views.region = Ti.UI.createLabel({
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Arial",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Please select region",
        left: "24",
        top: "143",
        id: "region"
    });
    $.__views.__alloyId14.add($.__views.region);
    $.__views.button = Ti.UI.createImageView({
        id: "button",
        image: "view-business-button.png",
        bottom: "20",
        height: "42"
    });
    $.__views.__alloyId14.add($.__views.button);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "View Business Listing",
        bottom: "32",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true",
        visible: "false",
        bottom: "0"
    });
    $.__views.__alloyId14.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId17 = Ti.UI.createPickerRow({
        title: "Broken Hill",
        id: "__alloyId17"
    });
    $.__views.column1.addRow($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        title: "Lightning Ride",
        id: "__alloyId18"
    });
    $.__views.column1.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        title: "Bourke",
        id: "__alloyId19"
    });
    $.__views.column1.addRow($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        title: "Armidale",
        id: "__alloyId20"
    });
    $.__views.column1.addRow($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup.top = -43;
    var pickerOpened = !1;
    $.dropdown.addEventListener("touchstart", function(e) {
        $.dropdown.setImage("region-select-dropdown-over.png");
    });
    $.dropdown.addEventListener("touchend", function(e) {
        $.dropdown.setImage("region-select-dropdown.png");
    });
    $.dropdown.addEventListener("click", function(e) {
        if (pickerOpened) {
            $.picker.setVisible(!1);
            pickerOpened = !1;
        } else {
            $.picker.setVisible(!0);
            pickerOpened = !0;
        }
    });
    $.picker.addEventListener("change", function(e) {
        $.picker.setVisible(!1);
        $.region.setText(e.selectedValue[0]);
        pickerOpened = !1;
    });
    $.button.addEventListener("touchstart", function(e) {
        $.button.setImage("view-business-buttonover.png");
    });
    $.button.addEventListener("touchend", function(e) {
        $.button.setImage("view-business-button.png");
    });
    $.button.addEventListener("click", function(e) {
        Alloy.CFG.navgroup.open(Alloy.createController("businessList").getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;