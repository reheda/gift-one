$(function() {

	// Custom JS



	// Products slider
	$('.all-products').owlCarousel({
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

	// all reviews slider
	$('.all-reviews').owlCarousel({
		margin: 20,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		items: 1
	});


	// callback form popup
	$('a[href="#callback-form-popup"').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 300, //delay removal by X to allow out-animation
		closeBtnInside: true,
		mainClass: 'mfp-3d-unfold',
		// mainClass: 'mfp-zoom-in',
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('a[href="#callback-form-popup"]').click(function(){
		var dataForm = $(this).data('form');
		var dataText = $(this).data('text');
		$('#callback-form-popup .callback-form-title').text(dataText);

		$('#callback-form-popup [name="admin-data-form"]').val(dataForm);

	});

	//mobile menu slide
	var initialHeaderMinHeight = $('header').css('min-height');
	$('footer .mobile-menu').click(function(){
		$('html, body').animate({
			scrollTop: $(document).height()
		}, "slow"
		);
	});

	//hreader set min height based on mobile menu
	$('header .mobile-menu').click(function(){
			$('header').css({	
				'min-height': '75em'
			});
	});




	// create the back to top button
	var amountScrolled = 300;
	var duration = 300;

	// scroll to top
	$(window).scroll(function() {	
		if ( $(window).scrollTop() > amountScrolled ) {
			$('.back-to-top').slideDown('normal');
		} else {
			$('.back-to-top').slideUp('fast');
		}
	});

	$('.back-to-top').click(function() {
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});



});
