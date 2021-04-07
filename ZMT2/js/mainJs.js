$(function() {
	$('.menu-toggle').click(function() {
		$('.menu-toggle').toggleClass('active');
		$('#menu').toggleClass('active');
	})

	function scrollTo(elem) {
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 1000)
	}

	$('.scrollToIntro').click(function() {
		$('html, body').animate({
			scrollTop: $("#intro").offset().top
		}, 1000)
	});
	$('.scrollToSpecialties').click(function() {
		$('html, body').animate({
			scrollTop: $("#specialties").offset().top
		}, 2000)
	});
	// $('#logo').click(function() {
	// 	$('html, body').animate({
	// 		scrollTop: $("#top").offset().top
	// 	}, 1000)
	// });
})