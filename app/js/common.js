$(function() {

	// Custom JS
	$('.owl-carousel').owlCarousel({
		margin: 20,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveClass: true,
		responsive:{
				0:{
						items:1,
				},
				480:{
						items:2,
				},
				768:{
						items:3,
				},
				992:{
						items:4,
				},
				1200:{
						items:4,
				}
		}
	});
	
});
