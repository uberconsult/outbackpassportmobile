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
        backgroundColor: "#F3F0EB",
        id: "scrContent",
        top: "15",
        left: "20",
        width: "90%",
        height: "60%",
        layout: "vertical",
        showVerticalScrollIndicator: "true"
    });
    $.__views.businessView.add($.__views.scrContent);
    $.__views.lblTitile = Ti.UI.createLabel({
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Arial",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "",
        id: "lblTitile",
        left: "0"
    });
    $.__views.scrContent.add($.__views.lblTitile);
    $.__views.lblSpace = Ti.UI.createLabel({
        text: "",
        id: "lblSpace",
        left: "0",
        height: "14"
    });
    $.__views.scrContent.add($.__views.lblSpace);
    $.__views.lblDescription = Ti.UI.createLabel({
        top: "5",
        left: "0",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "",
        id: "lblDescription"
    });
    $.__views.scrContent.add($.__views.lblDescription);
    $.__views.imageLine = Ti.UI.createImageView({
        id: "imageLine",
        width: "100%",
        top: "10",
        image: "/images/line.PNG"
    });
    $.__views.scrContent.add($.__views.imageLine);
    $.__views.lblAddTxt = Ti.UI.createLabel({
        top: "10",
        left: "0",
        color: "#F59629",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Address",
        id: "lblAddTxt"
    });
    $.__views.scrContent.add($.__views.lblAddTxt);
    $.__views.lblAddData = Ti.UI.createLabel({
        top: "5",
        left: "0",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "",
        id: "lblAddData"
    });
    $.__views.scrContent.add($.__views.lblAddData);
    $.__views.lblPhoneTxt = Ti.UI.createLabel({
        top: "10",
        left: "0",
        color: "#F59629",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Phone",
        id: "lblPhoneTxt"
    });
    $.__views.scrContent.add($.__views.lblPhoneTxt);
    $.__views.lblPhoneData = Ti.UI.createLabel({
        top: "5",
        left: "0",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: ">",
        id: "lblPhoneData"
    });
    $.__views.scrContent.add($.__views.lblPhoneData);
    $.__views.lblOpHoursTxt = Ti.UI.createLabel({
        top: "10",
        left: "0",
        color: "#F59629",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Opening Hours",
        id: "lblOpHoursTxt"
    });
    $.__views.scrContent.add($.__views.lblOpHoursTxt);
    $.__views.lblOpHoursData = Ti.UI.createLabel({
        top: "5",
        left: "0",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: ">",
        id: "lblOpHoursData"
    });
    $.__views.scrContent.add($.__views.lblOpHoursData);
    $.__views.lblHoOpHoursTxt = Ti.UI.createLabel({
        top: "10",
        left: "0",
        color: "#F59629",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "15dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Public Holidays",
        id: "lblHoOpHoursTxt"
    });
    $.__views.scrContent.add($.__views.lblHoOpHoursTxt);
    $.__views.lblHoOpHoursData = Ti.UI.createLabel({
        top: "5",
        left: "0",
        textAlign: "left",
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "14dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: ">",
        id: "lblHoOpHoursData"
    });
    $.__views.scrContent.add($.__views.lblHoOpHoursData);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.populateView = function(businessObject) {
        $.bizImage.image = businessObject.getBizImgDir();
        $.lblTitile.text = businessObject.getName();
        $.lblDescription.text = businessObject.getDescription();
        $.lblAddData.text = businessObject.getAdd1() + "\n" + businessObject.getAdd2();
        $.lblPhoneData.text = businessObject.getPhone();
        $.lblOpHoursData.text = businessObject.getOpHours();
        $.lblHoOpHoursData.text = businessObject.getHolidayOpHours();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;