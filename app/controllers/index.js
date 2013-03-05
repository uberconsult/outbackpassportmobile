function doClick(e) {  
    var wRegions = Alloy.createController('regions').getView();
     $.open(wRegions, {animated : true});
}

$.index.open();
