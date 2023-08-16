$(() => {
	$(document).on('scroll',() => {$(window).scrollTop() > 100 ? $('.scroll-top-wrapper').show() : $('.scroll-top-wrapper').hide()});
	$('.scroll-top-wrapper').on('click',() => $('html, body').animate({scrollTop: $('body').offset().top}, 500, 'linear'));
});