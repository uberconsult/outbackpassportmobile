if (OS_IOS || OS_MOBILEWEB) {
	// attach the navgroup to Alloy.CFG so it can be accessed globally
	Alloy.CFG.mainWin = $.index;
	Alloy.CFG.navgroup = $.navgroup;

	$.win1.addEventListener('swipe', function(e) {
		$.navgroup.open(Alloy.createController('regions').getView());
	});
}

Alloy.CFG.navgroup.top = -43;
//Alloy.CFG.navgroup.top = 0;

$.index.barColor = "#000";

if (Ti.Platform.osname === 'iphone')
	$.index.open({
		transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
else
	$.index.open();
