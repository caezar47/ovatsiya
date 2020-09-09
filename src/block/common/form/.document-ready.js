// подключение плагина validationEngine
var form_panel = $("[data-form-validation]");
form_panel.validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
}); 

// маска для поля ввода телефона
var phone = $(".form__control[type='tel']");
phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});

// кастомизация поля прикрепления файла
var file = $('.form__file-input');
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html($(this).val().replace(/.*(\/|\\)/, '')+'<small>Заменить файл</small>');
});