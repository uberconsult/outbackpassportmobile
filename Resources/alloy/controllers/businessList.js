function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.businessList = Ti.UI.createWindow({
        barColor: "#000",
        id: "businessList"
    });
    $.addTopLevelView($.__views.businessList);
    $.__views.resultBar = Ti.UI.createView({
        backgroundImage: "search-result-bar.png",
        id: "resultBar",
        top: "0",
        left: "0",
        height: "19",
        backgroundColor: "orange"
    });
    $.__views.businessList.add($.__views.resultBar);
    $.__views.result = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Arial",
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "bold",
            shadowOffset: {
                x: 1,
                y: 0
            },
            shadowColor: "#000"
        },
        text: "10 of 168 results",
        id: "result",
        left: "1",
        top: "2"
    });
    $.__views.resultBar.add($.__views.result);
    $.__views.__alloyId0 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId0"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.__alloyId0);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        borderColor: "#000",
        borderWidth: 1,
        height: 58,
        width: 90,
        top: 6,
        left: 6,
        image: "historic-daydream-mine-image.jpg",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId0.add($.__views.view);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Apple",
        id: "__alloyId3"
    });
    $.__views.view.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId4.add($.__views.view);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Bananas",
        id: "__alloyId5"
    });
    $.__views.view.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId6.add($.__views.view);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Carrots",
        id: "__alloyId7"
    });
    $.__views.view.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId8"
    });
    __alloyId1.push($.__views.__alloyId8);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId8.add($.__views.view);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Potatoes",
        id: "__alloyId9"
    });
    $.__views.view.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId10"
    });
    __alloyId1.push($.__views.__alloyId10);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId10.add($.__views.view);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Cod",
        id: "__alloyId11"
    });
    $.__views.view.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        backgroundImage: "business-list-bar.png",
        height: 70,
        left: 0,
        id: "__alloyId12"
    });
    __alloyId1.push($.__views.__alloyId12);
    $.__views.view = Ti.UI.createView({
        id: "view",
        height: "20"
    });
    $.__views.__alloyId12.add($.__views.view);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "Haddock",
        id: "__alloyId13"
    });
    $.__views.view.add($.__views.__alloyId13);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1,
        id: "table",
        top: "19"
    });
    $.__views.businessList.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup.top = 0;
    $.businessList.addEventListener("blur", function(e) {
        Alloy.CFG.navgroup.top = -43;
    });
    var wen = Titanium.UI.createButton({
        titleId: "wen",
        backgroundImage: "search-button.png",
        height: 50,
        width: 35,
        top: 100
    }), tf = Titanium.UI.createTextField({
        height: 32,
        backgroundImage: "search-button-field.png",
        width: 250,
        font: {
            fontSize: 13
        },
        color: "#777",
        paddingLeft: 10,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
    }), flexSpace = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    }), cancel = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.CANCEL
    }), toolbarSearch = Titanium.UI.iOS.createToolbar({
        items: [ tf, flexSpace, cancel ],
        top: 0,
        borderTop: !0,
        borderBottom: !0,
        barColor: "#000"
    });
    cancel.addEventListener("click", function(e) {
        $.businessList.remove(toolbarSearch);
    });
    wen.addEventListener("click", function(e) {
        $.businessList.add(toolbarSearch);
    });
    $.businessList.setRightNavButton(wen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;