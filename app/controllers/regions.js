var pickerOpened = false;
/*
$.regions.addEventListener('click', function(e) {
	if (pickerOpened) {
		$.picker.setVisible(false);
	}
});
*/
$.dropdown.addEventListener('touchstart', function(e) {
	$.dropdown.setImage('region-select-dropdown-over.png');
});

$.dropdown.addEventListener('touchend', function(e) {
	$.dropdown.setImage('region-select-dropdown.png');
});

$.dropdown.addEventListener('click', function(e) {
	$.picker.setVisible(true);
	pickerOpened = true;
});

$.picker.addEventListener('change', function(e) {
	$.region.setText(e.column1);
	$.picker.setVisible(false);
	pickerOpened = false;
});

$.button.addEventListener('click', function(e) {

});
