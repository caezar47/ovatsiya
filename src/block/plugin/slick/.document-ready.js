'use strict';
$(function() { 
	var reviews = $('[data-slick-reviews]');
	var dots = $('[data-slick-dots]').data('slick-dots');
	//console.log(dots);

	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span><</button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span>></button>';

	var count = $('.slick-count');
    reviews.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(this).find(count).html('<span>'+i + '</span><span>/</span><span>' + slick.slideCount+'</span>');
    });
	reviews.slick({
		slide: '.card__item',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: dots,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
		    }
		]
	});
}); 