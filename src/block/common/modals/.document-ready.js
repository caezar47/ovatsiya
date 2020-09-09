var modal_btn_show = $('[data-toggle="modal"]');
modal_btn_show.on('click', function(e) {

	var modal = $(this).attr('data-target');
	var type = $(modal).find("[data-type]");
	var type_value = $(this).attr('data-type');
	var form_type = $(modal).find("[data-form-type]");
	form_type.attr({'value':type_value});
});