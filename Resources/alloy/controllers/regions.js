function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.regions = Ti.UI.createWindow({
        id: "regions"
    });
    $.addTopLevelView($.__views.regions);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundImage: "background-right-image.jpg",
        id: "__alloyId1"
    });
    $.__views.regions.add($.__views.__alloyId1);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "outback-passport-logo.png",
        top: "30",
        height: "80"
    });
    $.__views.__alloyId1.add($.__views.logo);
    $.__views.dropdown = Ti.UI.createImageView({
        id: "dropdown",
        image: "region-select-dropdown.png",
        top: "135",
        height: "42"
    });
    $.__views.__alloyId1.add($.__views.dropdown);
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
    $.__views.__alloyId1.add($.__views.region);
    $.__views.button = Ti.UI.createImageView({
        id: "button",
        image: "view-business-button.png",
        bottom: "20",
        height: "42"
    });
    $.__views.__alloyId1.add($.__views.button);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "View Business Listing",
        bottom: "32",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true",
        visible: "false",
        bottom: "0"
    });
    $.__views.__alloyId1.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup.top = -43;
    var regionDAO = require("/dao/regionDAO");
    Alloy.CFG.regionsArray = regionDAO.getAllRegions();
    Ti.API.info("TEST NIC " + Alloy.CFG.regionsArray.length);
    var pickerOpened = !1, regionHasBeenSelected = !1;
    $.picker.addEventListener("change", function(e) {
        $.picker.setVisible(!1);
        $.region.setText(e.selectedValue[0]);
        pickerOpened = !1;
        regionHasBeenSelected = !0;
    });
    var column = Ti.UI.createPickerColumn();
    for (var i = 0, ilen = Alloy.CFG.regionsArray.length; i < ilen; i++) {
        var row = Ti.UI.createPickerRow({
            title: Alloy.CFG.regionsArray[i].getName()
        });
        column.addRow(row);
    }
    $.picker.setColumns([ column ]);
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
    $.button.addEventListener("touchstart", function(e) {
        $.button.setImage("view-business-buttonover.png");
    });
    $.button.addEventListener("touchend", function(e) {
        $.button.setImage("view-business-button.png");
    });
    if (Alloy.CFG.regionsArray.length > 0) {
        $.region.setText(Alloy.CFG.regionsArray[0].getName());
        regionHasBeenSelected = !0;
    }
    $.button.addEventListener("click", function(e) {
        if (regionHasBeenSelected) {
            for (var i = 0, ilen = Alloy.CFG.regionsArray.length; i < ilen; i++) if ($.region.getText() == Alloy.CFG.regionsArray[i].getName()) {
                Alloy.CFG.regionId = Alloy.CFG.regionsArray[i].getId();
                Alloy.CFG.regionName = Alloy.CFG.regionsArray[i].getName();
                break;
            }
            Alloy.CFG.navgroup.open(Alloy.createController("businessList").getView());
        } else alert("Please select a region.");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;