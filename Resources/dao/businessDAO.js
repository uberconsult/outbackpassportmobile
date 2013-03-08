exports.getBusinessesByRegionId = function(regionId) {
    var Business = require("dao/Business"), index = 0, businessArray = [], db = Ti.Database.open("outback_passport"), businessRS = db.execute("SELECT * FROM businesses WHERE region_id = ? ORDER BY name", regionId);
    while (businessRS.isValidRow()) {
        var business = new Business(businessRS.fieldByName("id"), businessRS.fieldByName("name"), businessRS.fieldByName("region_id"), businessRS.fieldByName("sync_date"), businessRS.fieldByName("description"), businessRS.fieldByName("phone"), businessRS.fieldByName("add1"), businessRS.fieldByName("add2"), businessRS.fieldByName("op_hrs"), businessRS.fieldByName("holiday_op_hrs"), businessRS.fieldByName("biz_img"), businessRS.fieldByName("logo_img"));
        businessArray[index] = business;
        index++;
        businessRS.next();
    }
    businessRS.close();
    db.close();
    return businessArray;
};

exports.getBusinessesByBizId = function(bizId) {
    var Business = require("dao/Business"), index = 0, businessArray = [], db = Ti.Database.open("outback_passport"), businessRS = db.execute("SELECT * FROM businesses WHERE region_id = (SELECT region_id FROM businesses WHERE id = ?) ORDER BY name", bizId);
    while (businessRS.isValidRow()) {
        var business = new Business(businessRS.fieldByName("id"), businessRS.fieldByName("name"), businessRS.fieldByName("region_id"), businessRS.fieldByName("sync_date"), businessRS.fieldByName("description"), businessRS.fieldByName("phone"), businessRS.fieldByName("add1"), businessRS.fieldByName("add2"), businessRS.fieldByName("op_hrs"), businessRS.fieldByName("holiday_op_hrs"), businessRS.fieldByName("biz_img"), businessRS.fieldByName("logo_img"));
        businessArray[index] = business;
        index++;
        businessRS.next();
    }
    businessRS.close();
    db.close();
    return businessArray;
};