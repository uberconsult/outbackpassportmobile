
// The function populates the scrollable view by given an array of businesses
exports.populateViewWithArray = function(bizArray){
	var len = bizArray.length;
	
	for(var i=0; i<len; i++){
		var bizController = Alloy.createController('business');
		bizController.populateView(bizArray[i]);
		$.scrBizScroller.addView(bizController.getView());
	}
}

