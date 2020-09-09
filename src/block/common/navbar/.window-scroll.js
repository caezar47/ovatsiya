var scrolled = $(window).scrollTop();
var navbar = $('.navbar__block');
if ( scrolled > 200 ) {
	navbar.addClass('is--opacity');
} else {
	navbar.removeClass('is--opacity');
}
if ( scrolled > 350 ) {
	navbar.addClass('is--fixed');
} else {
	navbar.removeClass('is--fixed');
}
if ( scrolled > 450 ) {
	navbar.addClass('is--scroll');
} else {
	navbar.removeClass('is--scroll');
}