Alloy.CFG.navgroup.top = - 43;

var pickerOpened = false;

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

$.picker.addEventListener('change', function(e) {
	$.picker.setVisible(false);
	$.region.setText(e.selectedValue[0]);
	pickerOpened = false;
});

$.button.addEventListener('touchstart', function(e) {
	$.button.setImage('view-business-buttonover.png');
});

$.button.addEventListener('touchend', function(e) {
	$.button.setImage('view-business-button.png');
});

$.button.addEventListener('click', function(e) {
	Alloy.CFG.navgroup.open(Alloy.createController('businessList').getView());
});

