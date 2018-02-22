

/*---------Popups
============================================*/
//Info-page gallery

(function(){

$('.info-p__gallery-wrapper').magnificPopup({
	delegate: 'a',
	type: 'image',
	// tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	}
});


})();

/* Feedback popups
=================================*/
(function(){
	$('.f-write__btn, .services__time_btn').magnificPopup({
		type:'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				// $('.form').height($('.form__main_f-writer').innerHeight());
			}
		}
	});

	$('.form__close-btn, .form__success-btn').click(function(){
			$.magnificPopup.close();
			return false
	 });
})();













