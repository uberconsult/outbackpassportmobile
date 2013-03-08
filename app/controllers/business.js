
//The function that populates the view
exports.populateView = function(businessObject){
	//Ti.API.info(businessObject.getBizImgDir());
	$.bizImage.image = businessObject.getBizImgDir();
	$.lblTitile.text = businessObject.getName();
	$.lblDescription.text = businessObject.getDescription();
	$.lblAddData.text = businessObject.getAdd1() + '\n' + businessObject.getAdd2();
	$.lblPhoneData.text = businessObject.getPhone();
	$.lblOpHoursData.text = businessObject.getOpHours();
	$.lblHoOpHoursData.text = businessObject.getHolidayOpHours();
} 
