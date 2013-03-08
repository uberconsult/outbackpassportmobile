
// This function retrieve all business records by give region id and return then in an array
exports.getBusinessesByRegionId = function(regionId){
	var Business = require('dao/Business');
	var index = 0;
	var businessArray = [];
	
	var db = Ti.Database.open('outback_passport');
	var businessRS = db.execute('SELECT * FROM businesses WHERE region_id = ? ORDER BY name', regionId );
	
	while (businessRS.isValidRow()){
		
		var business = new Business(businessRS.fieldByName('id'), 
									businessRS.fieldByName('name'),
									businessRS.fieldByName('region_id'), 
									businessRS.fieldByName('sync_date'),
									businessRS.fieldByName('description'),
									businessRS.fieldByName('phone'),
									businessRS.fieldByName('add1'),
									businessRS.fieldByName('add2'),
									businessRS.fieldByName('op_hrs'),
									businessRS.fieldByName('holiday_op_hrs'),
									businessRS.fieldByName('biz_img'),
									businessRS.fieldByName('logo_img')
									);
								
		businessArray[index] = business;
		index++;
		businessRS.next();
	}
	
	businessRS.close();
	db.close();
	
	return businessArray;
	
};

// This function retrieve all business records by give name and return then in an array
exports.getBusinessesByName = function(name){
	var Business = require('dao/Business');
	var index = 0;
	var businessArray = [];
	
	var db = Ti.Database.open('outback_passport');
	var businessRS = db.execute('SELECT * FROM businesses WHERE lower(name) like lower(?) ORDER BY name', '%' + name + '%' );
	
	while (businessRS.isValidRow()){
		
		var business = new Business(businessRS.fieldByName('id'), 
									businessRS.fieldByName('name'),
									businessRS.fieldByName('region_id'), 
									businessRS.fieldByName('sync_date'),
									businessRS.fieldByName('description'),
									businessRS.fieldByName('phone'),
									businessRS.fieldByName('add1'),
									businessRS.fieldByName('add2'),
									businessRS.fieldByName('op_hrs'),
									businessRS.fieldByName('holiday_op_hrs'),
									businessRS.fieldByName('biz_img'),
									businessRS.fieldByName('logo_img')
									);
								
		businessArray[index] = business;
		index++;
		businessRS.next();
	}
	
	businessRS.close();
	db.close();
	
	return businessArray;
	
};

// This function retrieve a list of business in the same region as the business with the given id
exports.getBusinessesByBizId = function(bizId){
	var Business = require('dao/Business');
	var index = 0;
	var businessArray = [];
	
	var db = Ti.Database.open('outback_passport');
	var businessRS = db.execute('SELECT * FROM businesses WHERE region_id = (SELECT region_id FROM businesses WHERE id = ?) ORDER BY name', bizId);
	
	while (businessRS.isValidRow()){
		
		var business = new Business(businessRS.fieldByName('id'), 
									businessRS.fieldByName('name'),
									businessRS.fieldByName('region_id'), 
									businessRS.fieldByName('sync_date'),
									businessRS.fieldByName('description'),
									businessRS.fieldByName('phone'),
									businessRS.fieldByName('add1'),
									businessRS.fieldByName('add2'),
									businessRS.fieldByName('op_hrs'),
									businessRS.fieldByName('holiday_op_hrs'),
									businessRS.fieldByName('biz_img'),
									businessRS.fieldByName('logo_img')
									);
								
		businessArray[index] = business;
		index++;
		businessRS.next();
	}
	
	businessRS.close();
	db.close();
	
	return businessArray;
}
