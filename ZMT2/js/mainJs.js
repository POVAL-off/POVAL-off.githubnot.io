$(function() {
	$('.menu-toggle').click(function() {
		$('.menu-toggle').toggleClass('active');
		$('#menu').toggleClass('active');
	})
})

function slowScroll(id) {
	$('html, body').animate({
		scrollTop: $(id).offset().top
	},1000);
}