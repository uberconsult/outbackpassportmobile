Alloy.CFG.navgroup.top = 0;
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
	height : 32,
	backgroundImage : 'search-button-field.png',
	width : 250,
	font : {
		fontSize : 13
	},
	color : '#777',
	paddingLeft : 10,
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
	borderTop : true,
	borderBottom : true,
	barColor : '#000'
});

cancel.addEventListener('click', function(e){
	$.businessList.remove(toolbarSearch);
});

wen.addEventListener('click', function(e) {
	$.businessList.add(toolbarSearch);
});

$.businessList.setRightNavButton(wen);

// Dynamic Scrolling: load list when user is scrolling down and reach the end of the page
