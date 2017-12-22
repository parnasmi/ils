
//----- Mobile menu scripting -----
//====================================================

(function() {

	if (window.matchMedia('(max-width: 767px)').matches) {

		//Toggling header icons state toggle
		$('.top-bar__hamburger, .top-bar__mob-device-btn').on(tap, function(){
			$(this).toggleClass('active');

			if($('.menu__submenu').hasClass('active')) {
				$('.menu__submenu').removeClass('active')
			}

			if($('.slide-toggle fieldset').length) {
				setTimeout(function(){
					$('.slide-toggle fieldset').remove();
				},1000);
			}
		});

		//Top secondary menu
		$('.top-bar__hamburger').on(tap, function(e){
			e.preventDefault();

			var $this = $(this),
					hamburMenu = $('.mid-bar');

			hamburMenu.toggleClass('opened');
		});

		//Device menu
		$('.top-bar__mob-device-btn').on(tap, function(e){
			e.preventDefault();

			$('.nav').toggleClass('opened');
		});

		//Device menu model selecting

		$('.menu__item-link').on(tap, function(e){
			e.preventDefault();

			var $this = $(this),
					thisSubmenu = $this.next()
					.find('.slide-toggle');
			// 		prevAll = $this.closest('.menu__item').prevAll();

			$this.next().addClass('active');
			thisSubmenu.html(
				'<fieldset>'+
					'<div class="switch-toggle switch-ios">'+
						'<input id="models" name="option" type="radio" checked="" value="models">'+
						'<label for="models" onclick="">Модели</label>'+
						'<input id="service" name="option" type="radio" value="services">'+
						'<label for="service" onclick="">Услуги</label>'+
						'<a></a>'+
					'</div>'+
				'</fieldset>'
			);
			// prevAll.hide();
			return false;

		});

		//Close models section
		$('.menu__submenu-mobile-title').on(tap,function(){
			var $this = $(this),
					thisToggle = $this.next().find('fieldset');

			$(this).closest('.menu__submenu')
							.removeClass('active');
			setTimeout(function(){
				thisToggle.remove();
			}, 500)
		});

		//Slide toggle
		$('.slide-toggle').on('change', 'input[type=radio][name=option]',function(){
			
			var self = $(this),
					index = self.index(),
					models = $('.menu__submenu-section_models'),
					services = $('.menu__submenu-section_services');

					if(index === 0) {
						models.fadeIn(150)
						.siblings('.menu__submenu-section')
						.hide();
					}
					else if(index === 2) {
						services.fadeIn(150)
						.siblings('.menu__submenu-section')
						.hide();
					}
		});

	}//if (window.matchMedia('(max-width: 767px)').matches)

	
		// var fixed = document.querySelector('body'),
		// 		nav = document.querySelector('.nav-bg-fixed');
		// // if(nav.classList.contains('opened')) {
		// 	nav.addEventListener('touchmove', function(e) {

		// 	e.preventDefault();
		// 	}, false);
		// // }

		// $('.nav-bg-fixed').on('touchmove', function(e) {
		//     e.preventDefault();
		//     e.stopPropagation();
		//     // return false;
		// });

})();






