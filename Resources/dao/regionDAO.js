exports.getAllRegions = function() {
    var Region = require("/dao/Region"), index = 0, regionArray = [], db = Ti.Database.open("outback_passport"), regionsRS = db.execute("SELECT id, name, sync_date FROM regions");
    while (regionsRS.isValidRow()) {
        var region = new Region(regionsRS.fieldByName("id"), regionsRS.fieldByName("name"), regionsRS.fieldByName("sync_date"));
        regionArray[index] = region;
        index++;
        regionsRS.next();
    }
    regionsRS.close();
    db.close();
    return regionArray;
};