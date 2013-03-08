function Controller() {
    function populateList(businessArray) {
        var tableData = [];
        for (var i = 0, ilen = businessArray.length; i < ilen; i++) {
            var row = Ti.UI.createTableViewRow({
                objName: "row",
                objId: businessArray[i].getId(),
                touchEnabled: !0,
                backgroundImage: "business-list-bar.png",
                selectedBackgroundImage: "business-list-bar-over.png",
                height: 70
            });
            row.addEventListener("click", function(e) {
                var bizScrollerController = Alloy.createController("businessScroller");
                bizScrollerController.selectViewByBizId(businessArray[e.index].getId());
                Alloy.CFG.navgroup.open(bizScrollerController.getView());
            });
            var image = Ti.UI.createImageView({
                className: "preview",
                image: businessArray[i].getBizImgDir(),
                left: 6,
                top: 6,
                borderColor: "#000",
                borderWidth: 1,
                height: 58,
                width: 100
            });
            row.add(image);
            var heading = Ti.UI.createLabel({
                color: "#000",
                font: {
                    fontFamily: "AmericanTypewriter",
                    fontSize: 17,
                    fontWeight: "bold"
                },
                text: businessArray[i].getName(),
                textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
                top: 5,
                left: 114,
                width: 180,
                height: 18
            });
            row.add(heading);
            var address1 = Ti.UI.createLabel({
                color: "#333",
                font: {
                    fontFamily: "Arial",
                    fontSize: 10,
                    fontWeight: "normal"
                },
                text: businessArray[i].getAdd1(),
                textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                top: 25,
                left: 114,
                width: 180,
                height: 12
            });
            row.add(address1);
            var address2 = Ti.UI.createLabel({
                color: "#333",
                font: {
                    fontFamily: "Arial",
                    fontSize: 10,
                    fontWeight: "normal"
                },
                text: businessArray[i].getAdd2(),
                textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                top: 37,
                left: 114,
                width: 180,
                height: 12
            });
            row.add(address2);
            var phoneLabel = Ti.UI.createLabel({
                color: "#ff6200",
                font: {
                    fontFamily: "Arial",
                    fontSize: 10,
                    fontWeight: "bold"
                },
                text: "Phone:",
                textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                top: 52,
                left: 114,
                width: 40,
                height: 12
            });
            row.add(phoneLabel);
            var phone = Ti.UI.createLabel({
                color: "#000",
                font: {
                    fontFamily: "Arial",
                    fontSize: 10,
                    fontWeight: "normal"
                },
                text: businessArray[i].getPhone(),
                textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                top: 52,
                left: 152,
                width: 140,
                height: 12
            });
            row.add(phone);
            tableData.push(row);
        }
        if (tableData.length == 0) {
            $.table.setVisible(!1);
            $.result.setText("no data");
        } else {
            $.table.setData(tableData);
            $.result.setText(businessArray.length + " results");
        }
    }
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
            fontWeight: "bold"
        },
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowColor: "#000",
        text: "10 of 168 results",
        id: "result",
        left: "6",
        top: "2"
    });
    $.__views.resultBar.add($.__views.result);
    $.__views.table = Ti.UI.createTableView({
        id: "table",
        top: "19"
    });
    $.__views.businessList.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup.top = 0;
    var businessDAO = require("/dao/businessDAO"), businessArray = businessDAO.getBusinessesByRegionId(Alloy.CFG.regionId);
    populateList(businessArray);
    var wen = Titanium.UI.createButton({
        titleId: "wen",
        backgroundImage: "search-button.png",
        height: 50,
        width: 35,
        top: 100
    }), tf = Titanium.UI.createTextField({
        left: 0,
        height: 32,
        backgroundImage: "#333",
        backgroundImage: "search-button-field.png",
        width: 230,
        font: {
            fontSize: 15
        },
        color: "#333",
        paddingLeft: 30,
        returnKeyType: Titanium.UI.RETURNKEY_SEARCH,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
    });
    tf.addEventListener("change", function(e) {
        Ti.API.info("TEST NIC " + tf.getValue());
        populateList(businessDAO.getBusinessesByName(tf.getValue()));
    });
    var flexSpace = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    }), cancel = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.CANCEL
    }), toolbarSearch = Titanium.UI.iOS.createToolbar({
        items: [ tf, flexSpace, cancel ],
        top: 0,
        left: 0,
        borderTop: !0,
        borderBottom: !0,
        barColor: "#000"
    });
    cancel.addEventListener("click", function(e) {
        Alloy.CFG.mainWin.remove(toolbarSearch);
        populateList(businessDAO.getBusinessesByRegionId(Alloy.CFG.regionId));
    });
    wen.addEventListener("click", function(e) {
        Alloy.CFG.mainWin.add(toolbarSearch);
        tf.focus();
    });
    $.businessList.setRightNavButton(wen);
    $.businessList.setTitle(Alloy.CFG.regionName);
    $.businessList.addEventListener("blur", function(e) {
        Alloy.CFG.moveforward || (Alloy.CFG.navgroup.top = -43);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;