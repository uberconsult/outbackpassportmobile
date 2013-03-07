
//The function that populates the view
exports.populateView = function(businessObject){
	//Ti.API.info(businessObject.getBizImgDir());
	$.bizImage.image = businessObject.getBizImgDir();
} 