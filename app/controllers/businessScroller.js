Alloy.CFG.navgroup.top = 0;

// The function populates the scrollable view by given an array of businesses
exports.populateViewWithArray = function(regionsArray){
	var len = regionsArray.length;
	
	for(var i=0; i<len; i++){
		var bizController = Alloy.createController('business');
		bizController.populateView(bizArray[i]);
		$.scrBizScroller.addView(bizController.getView());
	}
}


// The function populates the scrollable view and show with given bizId
var populateViewAndShow = function(bizArray, bizId){
	var len = bizArray.length;
	var showViewIndex = 0;
	
	for(var i=0; i<len; i++){
		var bizController = Alloy.createController('business');
		bizController.populateView(bizArray[i]);
		$.scrBizScroller.addView(bizController.getView());
		if(bizArray[i].getId == bizId)
			showViewIndex = i;
	}
	
	$.scrBizScroller.currentPage = showViewIndex;
}

// This method shows the corresponding scrollable view with given biz Id
exports.selectViewByBizId = function(bizId){
	var businessDAO = require('/dao/businessDAO');
    var businessArray = businessDAO.getBusinessesByBizId(bizId);
	var len = businessArray.length;
	var showViewIndex = 0;
	
	//populates the scrollable view 
	for(var i=0; i<len; i++){
		var bizController = Alloy.createController('business');
		bizController.populateView(businessArray[i]);
		$.scrBizScroller.addView(bizController.getView());
		//If the business id matches the given id, record its index for display
		if(bizId == businessArray[i].getId()){
			showViewIndex = i;
		}
	}
	
	$.scrBizScroller.scrollToView(showViewIndex);
}

