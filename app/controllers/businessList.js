Alloy.CFG.navgroup.top = 0;

var businessDAO = require('/dao/businessDAO');
var businessArray = businessDAO.getBusinessesByRegionId(Alloy.CFG.regionId);
Ti.API.info('TEST NIC ' + businessArray.length);

var tableData = [];

for (var i = 0, ilen = businessArray.length; i < ilen; i++) {
	Ti.API.info('TEST NIC : loop ' + i);
	var row = Ti.UI.createTableViewRow({
		objName : 'row',
		objId : businessArray[i].getId(),
		touchEnabled : true,
		backgroundImage : 'business-list-bar.png',
		selectedBackgroundImage : 'business-list-bar-over.png',
		height : 70
	});

	row.addEventListener('click', function(e) {
		Alloy.CFG.businessId = businessArray[e.index].getId();
		//TODO: open next controller : businesss details
	});

	var image = Ti.UI.createImageView({
		className : 'preview',
		image : businessArray[i].getBizImgDir(),
		left : 6,
		top : 6,
		borderColor : '#000',
		borderWidth : 1,
		height : 58,
		width : 100
	});

	row.add(image);

	var heading = Ti.UI.createLabel({
		color : '#000',
		font : {
			fontFamily : 'AmericanTypewriter',
			fontSize : 17,
			fontWeight : 'bold'
		},
		text : businessArray[i].getName(),
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
		top : 5,
		left : 114,
		width : 180,
		height : 18
	});

	row.add(heading);

	var address1 = Ti.UI.createLabel({
		color : '#333',
		font : {
			fontFamily : 'Arial',
			fontSize : 10,
			fontWeight : 'normal'
		},
		text : businessArray[i].getAdd1(),
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		top : 25,
		left : 114,
		width : 180,
		height : 12
	});

	row.add(address1);

	var address2 = Ti.UI.createLabel({
		color : '#333',
		font : {
			fontFamily : 'Arial',
			fontSize : 10,
			fontWeight : 'normal'
		},
		text : businessArray[i].getAdd2(),
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		top : 37,
		left : 114,
		width : 180,
		height : 12
	});

	row.add(address2);

	var phoneLabel = Ti.UI.createLabel({
		color : '#ff6200',
		font : {
			fontFamily : 'Arial',
			fontSize : 10,
			fontWeight : 'bold'
		},
		text : 'Phone:',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		top : 52,
		left : 114,
		width : 40,
		height : 12
	});

	row.add(phoneLabel);

	var phone = Ti.UI.createLabel({
		color : '#000',
		font : {
			fontFamily : 'Arial',
			fontSize : 10,
			fontWeight : 'normal'
		},
		text : businessArray[i].getPhone(),
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		top : 52,
		left : 152,
		width : 140,
		height : 12
	});

	row.add(phone);

	tableData.push(row);
}

if (tableData.length == 0) {
	$.table.setVisible(false);
	$.result.setText('no data');
} else {
	$.table.setData(tableData);
	$.result.setText(businessArray.length + ' results');
}

/*
 var button = Ti.UI.createButton({
 title : 'Back',
 style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
 });
 */
$.businessList.addEventListener('blur', function(e) {
	Alloy.CFG.navgroup.top = -43;
});

var wen = Titanium.UI.createButton({
	titleId : 'wen',
	backgroundImage : 'search-button.png',
	height : 50,
	width : 35,
	top : 100
});

var tf = Titanium.UI.createTextField({
	left : 0,
	height : 32,
	backgroundImage : '#333',
	backgroundImage : 'search-button-field.png',
	width : 230,
	font : {
		fontSize : 13
	},
	color : '#333',
	paddingLeft : 25,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_NONE
});

var flexSpace = Titanium.UI.createButton({
	systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var cancel = Titanium.UI.createButton({
	systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
});

var toolbarSearch = Titanium.UI.iOS.createToolbar({
	items : [tf, flexSpace, cancel],
	top : 0,
	left : 0,
	borderTop : true,
	borderBottom : true,
	barColor : '#000'
});

cancel.addEventListener('click', function(e) {
	$.businessList.remove(toolbarSearch);
});

wen.addEventListener('click', function(e) {
	$.businessList.add(toolbarSearch);
});

$.businessList.setRightNavButton(wen);

$.businessList.setTitle(Alloy.CFG.regionName);
// Dynamic Scrolling: load list when user is scrolling down and reach the end of the page
