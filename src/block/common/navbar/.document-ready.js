var humb = $("[data-hamburger]");
var collapse = $(".navbar__collapse");
var html = $("html");

humb.on('click',function() {	
	$(this).toggleClass("is--active");			
	$(collapse).toggleClass("is--open");
	$(html).toggleClass("is--open-navbar");
});
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__container.is--collapse').length == 0 && $(event.target).closest('[data-hamburger]').length == 0){	
		humb.removeClass("is--active");
		$(html).removeClass("is--open-navbar");
		$(collapse).removeClass("is--open");
	}		
});