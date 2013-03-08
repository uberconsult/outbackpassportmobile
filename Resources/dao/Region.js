function Region(id, name, sync_date) {
    this.id = id;
    this.name = name;
    this.sync_date = sync_date;
}

Region.prototype.getId = function() {
    return this.id;
};

Region.prototype.getName = function() {
    return this.name;
};

Region.prototype.getSyncDate = function() {
    return this.sync_date;
};

module.exports = Region;