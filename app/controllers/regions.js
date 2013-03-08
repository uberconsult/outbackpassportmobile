Alloy.CFG.navgroup.top = -43;
var regionDAO = require('/dao/regionDAO');
Alloy.CFG.regionsArray = regionDAO.getAllRegions();
Ti.API.info('TEST NIC ' + Alloy.CFG.regionsArray.length);

var pickerOpened = false;
var regionHasBeenSelected = false;

$.picker.addEventListener('change', function(e) {
	$.picker.setVisible(false);
	$.region.setText(e.selectedValue[0]);
	pickerOpened = false;
	regionHasBeenSelected = true;
});

var column = Ti.UI.createPickerColumn();

for (var i = 0, ilen = Alloy.CFG.regionsArray.length; i < ilen; i++) {
	var row = Ti.UI.createPickerRow({
		title : Alloy.CFG.regionsArray[i].getName()
	});
	column.addRow(row);
}

$.picker.setColumns([column]);

$.dropdown.addEventListener('touchstart', function(e) {
	$.dropdown.setImage('region-select-dropdown-over.png');
});

$.dropdown.addEventListener('touchend', function(e) {
	$.dropdown.setImage('region-select-dropdown.png');
});

$.dropdown.addEventListener('click', function(e) {
	if (pickerOpened) {
		$.picker.setVisible(false);
		pickerOpened = false;
	} else {
		$.picker.setVisible(true);
		pickerOpened = true;
	}
});

$.button.addEventListener('touchstart', function(e) {
	$.button.setImage('view-business-buttonover.png');
});

$.button.addEventListener('touchend', function(e) {
	$.button.setImage('view-business-button.png');
});

if (Alloy.CFG.regionsArray.length > 0) {
	$.region.setText(Alloy.CFG.regionsArray[0].getName());
	regionHasBeenSelected = true;
}

$.button.addEventListener('click', function(e) {
	if (regionHasBeenSelected) {
		for (var i = 0, ilen = Alloy.CFG.regionsArray.length; i < ilen; i++) {
			if ($.region.getText() == Alloy.CFG.regionsArray[i].getName()) {
				Alloy.CFG.regionId = Alloy.CFG.regionsArray[i].getId();
				Alloy.CFG.regionName = Alloy.CFG.regionsArray[i].getName();
				break;
			}
		}

		Alloy.CFG.navgroup.open(Alloy.createController('businessList').getView());
	} else {
		alert('Please select a region.');
	}
});

