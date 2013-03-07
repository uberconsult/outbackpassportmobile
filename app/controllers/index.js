if (OS_IOS || OS_MOBILEWEB) {
	// attach the navgroup to Alloy.CFG so it can be accessed globally
	Alloy.CFG.navgroup = $.navgroup;

	$.win1.addEventListener('swipe', function(e) {
		$.navgroup.open(Alloy.createController('regions').getView());
	});
}

$.index.top = - 42;

if (Ti.Platform.osname === 'iphone')
	$.index.open({
		transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
else
	$.index.open();
