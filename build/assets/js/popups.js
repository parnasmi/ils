

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


/* Feedback popups
=================================*/
(function(){

	$('.faq__ask-btn').magnificPopup({
		type:'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				// $('.form').height($('.form__main_f-writer').innerHeight());
				$('html').addClass('no-scroll');
			},
			close: function(){
				$('html').removeClass('no-scroll');
			}
		}
	});

	$('.form__close-btn').click(function(){
			$.magnificPopup.close();
			return false
	 });
})();

// Попап скидки
	(function($) {
		var isSubscribed = false;
		var delayTime = $('#sale-form').data('delay');
		if (firstImpression('ilsPopup', 7)) {// цифр означает количество дней в течении которых сохраниться куки
				$(window).on('load', function(){
					setTimeout(function(){
						if ($('#sale-form').length) {
							$.magnificPopup.open({
								items: {
									src: '#sale-form' 
								},
								type: 'inline',
								removalDelay: 300,
								mainClass: 'mfp-zoom-in',
							});
						}
					}, delayTime);
				})
			
				$('.sale-popup__input-wrapper > input').focus(function(){
					isSubscribed = true;
					//Если пользователь взял скидку. Следующий раз эту скидку будем показывать через 30 дней. Иначе через 7
					//https://github.com/js-cookie/js-cookie
					Cookies.set('ilsPopup', true, { expires: 30 });
				});
		}
			//Это попап появляется при уходе из страницы
			//когда польз. не подписался на скидку.
		if (firstImpression('ilsPopupOnExit', 7)) {// цифр означает количество дней в течении которых сохраниться куки
				$(window).mouseleave(function (e) {
				var modalSeen = sessionStorage.getItem("modalSeen");
				if ($('#sale-form').length) {
					if (e.toElement == null && !modalSeen && !isSubscribed) {
						$.magnificPopup.open({
							items: {
								src: '#sale-form' 
							},
							type: 'inline',
							removalDelay: 300,
							mainClass: 'mfp-zoom-in',
							callbacks: {
								open: function() {
									$('#sale-form').addClass('on-exit-popup');
								}
							}
						});
					}
					
					$('.sale-popup__input-wrapper > input').focus(function(){
						//Если пользователь взял скидку. Следующий раз эту скидку будем показывать через 30 дней. Иначе через 7
						//https://github.com/js-cookie/js-cookie
						Cookies.set('ilsPopupOnExit', true, { expires: 30 });
					});
				}
				});
			}
	
		
		
		$('.form__close-btn_conf').click(function(){
			
			if (!$('#sale-form').hasClass('on-exit-popup')) {
				firstImpression('ilsPopupOnExit', null);
			}
			$.magnificPopup.close();
			
			if ($('#sale-form').hasClass('on-exit-popup')) {
				sessionStorage.setItem("modalSeen", true);
			}
			return false;
		});
	})(jQuery);











