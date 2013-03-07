
// This function retrieve all region record and return them in an array
exports.getAllRegions = function(){
	var Region = require('/dao/Region');
	var index = 0;
	var regionArray = [];
	
	var db = Ti.Database.open('outback_passport');
	var regionsRS = db.execute('SELECT id, name, sync_date FROM regions');
	
	while (regionsRS.isValidRow()){
		
		var region = new Region(regionsRS.fieldByName('id'), 
								regionsRS.fieldByName('name'), 
								regionsRS.fieldByName('sync_date'));
								
		regionArray[index] = region;
		index++;
		regionsRS.next();
	}
	
	regionsRS.close();
	db.close();
	
	return regionArray;
};
