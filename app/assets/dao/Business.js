// This is the object representation of business table

//Constructor function for business
function Business(id, name, regionId, syncDate, description, 
	phone, add1, add2, opHours, holidayOpHours, bizImg, logoImg) {
	this.id = id;
	this.name = name;
	this.regionId = regionId;
	this.syncDate = syncDate;
	this.description = description;
	this.phone = phone;
	this.add1 = add1;
	this.add2 = add2;
	this.opHours = opHours;
	this.holidayOpHours = holidayOpHours;
	this.bizImg = bizImg;
	this.logoImg = logoImg;
}

Business.prototype.getId = function() {
	return this.id;
}

Business.prototype.getName = function() {
	return this.name;
}

Business.prototype.getRegionId = function() {
	return this.regionId;
}

Business.prototype.getSyncDate = function() {
	return this.syncDate;
}

Business.prototype.getDescription = function() {
	return this.description;
}

Business.prototype.getPhone = function() {
	return this.phone;
}

Business.prototype.getAdd1 = function() {
	return this.add1;
}

Business.prototype.getAdd2 = function() {
	return this.add2;
}

Business.prototype.getOpHours = function() {
	return this.opHours;
}

Business.prototype.getHolidayOpHours = function() {
	return this.holidayOpHours;
}

Business.prototype.getBizImgDir = function() {
	return "/images/" + this.bizImg;
}

Business.prototype.getLogoImgDir = function() {
	return "/images/" + this.logoImg;
}

Business.prototype.toString = function() {
	return '(' + this.id + ', ' + this.name + ', ' + this.regionId + ', ' + this.syncDate 
			+ ', ' + this.description + ', ' + this.phone + ', ' + this.add1 + ', ' + this.add2 
			+ ', ' + this.opHours + ', ' + this.holidayOpHours + ', ' + this.bizImg + ', ' 
			+ this.logoImg + ')';
}


module.exports = Business;
