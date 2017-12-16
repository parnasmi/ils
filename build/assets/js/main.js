// check touch support
if( 'ontouchstart' in window ){ var tap = 'touchstart'; }
else { var tap = 'click'; }

//Indemand tablet version items equilheights

(function(){
	if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1279px)').matches) {
		$('.indemand__item:not(.indemand__item_index-main)').equalHeights();
		$('.indemand__item-title:not(.indemand__item-title_index-main)').equalHeights();
	}

	if (window.matchMedia('(max-width: 767px)').matches) {
		// $('.footer__address').equalHeights();
	}

})();



//Videos block "show more videos" button cloning for mobile
(function(){
	$('.video__btn').clone().appendTo('.video__playlist-item_mobile-link');
})();

//Info Page "Фото офиса"

(function(){
	$('.info-p__gallery-link').on(tap, function(e){
		e.preventDefault();
		
		var $this = $(this),
				gallery = $this.closest('.info-p__address-i')
												.find('.info-p__gallery');

				gallery.slideToggle('fast', function(){

					$this.toggleClass('active');
				});
	});
})();



//----- Cloning some header blocks for adaptive -----
//====================================================

(function() {

	if (window.matchMedia('(max-width: 767px)').matches) {

		$('.logo').clone().appendTo('.top-bar__mob-logo');
		$('.tel').clone().appendTo('.top-bar__mob-tel-btn');
		$('.top-bar__wrapper').clone().appendTo('.mid-bar__mob-sec-menu');
		$('.catalog__menu-list').clone().appendTo('.cat-mmenu__nav');
	}
	//Cloning title for providing tap on whole block
	$('.select__item-col').each(function(){
		var $this     = $(this);
				thisTitle = $this.find('.select__item-title'),
				thisLink  = $this.find('.select__mobile-link');

		thisTitle.clone().appendTo(thisLink);
	});

	//Item page price cloning
	if (window.matchMedia('(max-width: 1023px)').matches) {
			$('.item-info__price-wrapper')
				.clone()
				.appendTo('.item-slider__price');
	}

})();

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

})();






//----- Menu hover white background -----
//====================================================
(function(){
	$('.menu__item').hover(function(){
		$('.nav').toggleClass('on-hover');
	},200);
})();
//----- Main screen slider -----
//====================================================

// Main-screen banner slider
// $('.main-banner__wrapper').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });

(function(){
	//Videos block slider
	$('.video__player_js').flickity({
		// // options
		// cellAlign: 'left',
		contain: true,
		setGallerySize: false,
		prevNextButtons: false,
		
	});

	$('.video__playlist-list_js').flickity({
			asNavFor: '.video__player_js',
			contain: true,
			prevNextButtons: false,
			pageDots: false
	});

	// Index items
	$('.index-items__wrapper_js').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		groupCells: true,
		// friction: 0.15,
		// selectedAttraction: 0.3,
		selectedAttraction: 0.15,
		friction: 0.8
	});
	
	if (window.matchMedia('(max-width: 767px)').matches) {
		if($('.breadcrumbs__list').length) {
			$('.breadcrumbs__list').flickity({
					accessibility: false,
					freeScroll: true,
					prevNextButtons: false,
					pageDots: false,
					cellAlign: 'left',
					contain: true,
					//setGallerySize: false
			});
		}
	}

	//Videos block slider
	$('.item-slider__init').flickity({
		// // options
		// cellAlign: 'left',
		contain: true,
		setGallerySize: false,
		prevNextButtons: false,
		pageDots: true
		
	});

	$('.item-slider__thumbs-init').flickity({
			asNavFor: '.item-slider__init',
			contain: true,
			prevNextButtons: false,
			pageDots: false
	});

	//Info-page menu mobile version slider

	if (window.matchMedia('(max-width: 767px)').matches) {
		if($('.info-p__menu-list').length) {
			$('.info-p__menu-list').flickity({
					accessibility: false,
					freeScroll: true,
					prevNextButtons: false,
					pageDots: false,
					cellAlign: 'left',
					contain: true,
					//setGallerySize: false
			});
		}
	}
	
})();

//Deviding title and other texts into separate tags


	(function(){

		$('.accented-services__item-title, .shop-banner__title').html(function (i, html) {
			return html.replace(/(\S+)/, '<span>$1</span>')});

		$('.section-head__title_feedbacks').html(function (i, html) {
			return html.replace(/(\S+)/, '<span>$1</span>')});

		$('.section-head__btn_all-fdbs').html(function (i, html) {
			return html.replace(/(\S+)/, '<span>$1</span>')});

		$('.section-head__title_video').html(function (i, html) {
			return html.replace(/(\S+)\s*$/, '<strong>$1</strong>')});

		$('.section-head__title_shop-items').html(function (i, html) {
		    return html.replace(/(\S+\s\S+\s\S+)\s*$/, '<strong>$1</strong><br/>')
		})
	})();















/*---------Feedbacks audioplayer
============================================*/
(function(){
	$('.player').mediaelementplayer({
		success: function(mediaElement, originalNode) {
				
		},
		stretching: 'responsive',
		startVolume:1,
		// audioVolume: 'vertical',
		defaultAudioHeight: 30
		// hideVolumeOnTouchDevices: false
});
})();



//----- About section mousemove -----
//====================================================

var last_position = {},
    $output       = $('.about__logo-circle-shadows'),
    mousemove_ok  = true,
    mouse_timer   = setInterval(function () {
        mousemove_ok = true;
    }, 500),
    count         = 1;
$(document).on('mousemove', function (event) {
    if (mousemove_ok) {
        mousemove_ok = false;
        if (typeof(last_position.x) != 'undefined') {
            var deltaX = last_position.x - event.clientX,
                deltaY = last_position.y - event.clientY;
            if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
                //left
                $output.removeClass('to-right to-up to-down');
                $output.addClass('to-left');
            } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
                //right
                $output.removeClass('to-left to-up to-down');
                $output.addClass('to-right');
            } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
                //up
               $output.removeClass('to-left to-right to-down');
               $output.addClass('to-up');
            } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
                //down
                $output.removeClass('to-left to-right to-up');
                $output.addClass('to-down');
            }
            if ($output.children().length> 10) {
                // $output.children().eq(0).remove();
            }
        }
        last_position = {
            x : event.clientX,
            y : event.clientY
        };
    }
});
//----- Mobile footer accordion -----
//====================================================

(function(){
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('.footer__col-title').on(tap, function(){

			var $this = $(this),
					content = $this.next(),
					siblTitle = $this.closest('.footer__col').siblings().find('.footer__col-title'),
					siblContent = $this.closest('.footer__col').siblings().find('.footer__col-list');
			
			siblTitle.removeClass('active');
			siblContent.slideUp();

			$this.toggleClass('active');
			content.slideToggle();
		});
	}

})();
//----- Price page mobile version toggle -----
//====================================================

(function(){
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('.price-header__mobile-toggle').on('change', 'input[type=radio][name=option]',function(){
			
			var self = $(this),
					index = self.index(),
					services = $('.services__content_price-page'),
					priceSidebar = $('.services__sidebar_by-problem');

					if(index === 0) {
						services.fadeIn(150)
						priceSidebar.hide();
					}
					else if(index === 2) {
						priceSidebar.fadeIn(150)
						services.hide();
					}
		});
	}
	
})();
//----- Catalog Menu -----
//====================================================

(function(){
	$('.cat-mmenu__button').on(tap, function(e){
		e.preventDefault();

		var $this = $(this),
				parent = $this.closest('.catalog__filter'),
				nav = $('.cat-mmenu__nav');

		
				nav.slideToggle('fast',function(){
					parent.toggleClass('active');
				});
	});

	$('.catalog__filter-selected').on(tap, function(e){
		e.preventDefault();

		var $this = $(this),
				parent = $this.closest('.catalog__filter'),
				sublist = $('.catalog__sublist');

		
				sublist.toggleClass('active');
				parent.toggleClass('active');

		$(document).bind('click.wrapper', function(e) {
		    if($(e.target).closest('.catalog__filter-selected').length == 0) {
		        sublist.removeClass('active');
		       	parent.removeClass('active');
		        $(document).unbind('click.wrapper');
		    }
		});
	});
})();
//Item page title cloning
(function() {

	// if (window.matchMedia('(min-width: 1280px)').matches) {
			$('.item-info__title-text')
				.clone()
				.appendTo('.item-info__descr-title');
	// }

})();


/*---------Popups
============================================*/
//Info-page gallery

(function(){

$('.info-p__gallery-wrapper').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
// image: {
//   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//   titleSrc: function(item) {
//     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
//   }
// }
});

})();




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2JpbGUtY2xvbmluZy5qcyIsIm1vYmlsZS1tZW51LmpzIiwibWVudS5qcyIsInNsaWRlcnMuanMiLCJ0aXRsZS5qcyIsImF1ZGlvLmpzIiwiYWJvdXQuanMiLCJmb290ZXIuanMiLCJtb2JpbGUtcHJpY2UtdG9nZ2xlLmpzIiwiY2F0YWxvZy1tZW51LmpzIiwiY2xvbmluZy5qcyIsInBvcHVwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2hlY2sgdG91Y2ggc3VwcG9ydFxuaWYoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApeyB2YXIgdGFwID0gJ3RvdWNoc3RhcnQnOyB9XG5lbHNlIHsgdmFyIHRhcCA9ICdjbGljayc7IH1cblxuLy9JbmRlbWFuZCB0YWJsZXQgdmVyc2lvbiBpdGVtcyBlcXVpbGhlaWdodHNcblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcyAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI3OXB4KScpLm1hdGNoZXMpIHtcblx0XHQkKCcuaW5kZW1hbmRfX2l0ZW06bm90KC5pbmRlbWFuZF9faXRlbV9pbmRleC1tYWluKScpLmVxdWFsSGVpZ2h0cygpO1xuXHRcdCQoJy5pbmRlbWFuZF9faXRlbS10aXRsZTpub3QoLmluZGVtYW5kX19pdGVtLXRpdGxlX2luZGV4LW1haW4pJykuZXF1YWxIZWlnaHRzKCk7XG5cdH1cblxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHQvLyAkKCcuZm9vdGVyX19hZGRyZXNzJykuZXF1YWxIZWlnaHRzKCk7XG5cdH1cblxufSkoKTtcblxuXG5cbi8vVmlkZW9zIGJsb2NrIFwic2hvdyBtb3JlIHZpZGVvc1wiIGJ1dHRvbiBjbG9uaW5nIGZvciBtb2JpbGVcbihmdW5jdGlvbigpe1xuXHQkKCcudmlkZW9fX2J0bicpLmNsb25lKCkuYXBwZW5kVG8oJy52aWRlb19fcGxheWxpc3QtaXRlbV9tb2JpbGUtbGluaycpO1xufSkoKTtcblxuLy9JbmZvIFBhZ2UgXCLQpNC+0YLQviDQvtGE0LjRgdCwXCJcblxuKGZ1bmN0aW9uKCl7XG5cdCQoJy5pbmZvLXBfX2dhbGxlcnktbGluaycpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGdhbGxlcnkgPSAkdGhpcy5jbG9zZXN0KCcuaW5mby1wX19hZGRyZXNzLWknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmZpbmQoJy5pbmZvLXBfX2dhbGxlcnknKTtcblxuXHRcdFx0XHRnYWxsZXJ5LnNsaWRlVG9nZ2xlKCdmYXN0JywgZnVuY3Rpb24oKXtcblxuXHRcdFx0XHRcdCR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSk7XG5cdH0pO1xufSkoKTtcblxuIiwiXG4vLy0tLS0tIENsb25pbmcgc29tZSBoZWFkZXIgYmxvY2tzIGZvciBhZGFwdGl2ZSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpIHtcblxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblxuXHRcdCQoJy5sb2dvJykuY2xvbmUoKS5hcHBlbmRUbygnLnRvcC1iYXJfX21vYi1sb2dvJyk7XG5cdFx0JCgnLnRlbCcpLmNsb25lKCkuYXBwZW5kVG8oJy50b3AtYmFyX19tb2ItdGVsLWJ0bicpO1xuXHRcdCQoJy50b3AtYmFyX193cmFwcGVyJykuY2xvbmUoKS5hcHBlbmRUbygnLm1pZC1iYXJfX21vYi1zZWMtbWVudScpO1xuXHRcdCQoJy5jYXRhbG9nX19tZW51LWxpc3QnKS5jbG9uZSgpLmFwcGVuZFRvKCcuY2F0LW1tZW51X19uYXYnKTtcblx0fVxuXHQvL0Nsb25pbmcgdGl0bGUgZm9yIHByb3ZpZGluZyB0YXAgb24gd2hvbGUgYmxvY2tcblx0JCgnLnNlbGVjdF9faXRlbS1jb2wnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0dmFyICR0aGlzICAgICA9ICQodGhpcyk7XG5cdFx0XHRcdHRoaXNUaXRsZSA9ICR0aGlzLmZpbmQoJy5zZWxlY3RfX2l0ZW0tdGl0bGUnKSxcblx0XHRcdFx0dGhpc0xpbmsgID0gJHRoaXMuZmluZCgnLnNlbGVjdF9fbW9iaWxlLWxpbmsnKTtcblxuXHRcdHRoaXNUaXRsZS5jbG9uZSgpLmFwcGVuZFRvKHRoaXNMaW5rKTtcblx0fSk7XG5cblx0Ly9JdGVtIHBhZ2UgcHJpY2UgY2xvbmluZ1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjNweCknKS5tYXRjaGVzKSB7XG5cdFx0XHQkKCcuaXRlbS1pbmZvX19wcmljZS13cmFwcGVyJylcblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmFwcGVuZFRvKCcuaXRlbS1zbGlkZXJfX3ByaWNlJyk7XG5cdH1cblxufSkoKTsiLCJcbi8vLS0tLS0gTW9iaWxlIG1lbnUgc2NyaXB0aW5nIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCkge1xuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXG5cdFx0Ly9Ub2dnbGluZyBoZWFkZXIgaWNvbnMgc3RhdGUgdG9nZ2xlXG5cdFx0JCgnLnRvcC1iYXJfX2hhbWJ1cmdlciwgLnRvcC1iYXJfX21vYi1kZXZpY2UtYnRuJykub24odGFwLCBmdW5jdGlvbigpe1xuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdGlmKCQoJy5tZW51X19zdWJtZW51JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdCQoJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHR9XG5cblx0XHRcdGlmKCQoJy5zbGlkZS10b2dnbGUgZmllbGRzZXQnKS5sZW5ndGgpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdCQoJy5zbGlkZS10b2dnbGUgZmllbGRzZXQnKS5yZW1vdmUoKTtcblx0XHRcdFx0fSwxMDAwKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vVG9wIHNlY29uZGFyeSBtZW51XG5cdFx0JCgnLnRvcC1iYXJfX2hhbWJ1cmdlcicpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdFx0aGFtYnVyTWVudSA9ICQoJy5taWQtYmFyJyk7XG5cblx0XHRcdGhhbWJ1ck1lbnUudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuXHRcdH0pO1xuXG5cdFx0Ly9EZXZpY2UgbWVudVxuXHRcdCQoJy50b3AtYmFyX19tb2ItZGV2aWNlLWJ0bicpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdCQoJy5uYXYnKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG5cdFx0fSk7XG5cblx0XHQvL0RldmljZSBtZW51IG1vZGVsIHNlbGVjdGluZ1xuXG5cdFx0JCgnLm1lbnVfX2l0ZW0tbGluaycpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdFx0dGhpc1N1Ym1lbnUgPSAkdGhpcy5uZXh0KClcblx0XHRcdFx0XHQuZmluZCgnLnNsaWRlLXRvZ2dsZScpO1xuXHRcdFx0Ly8gXHRcdHByZXZBbGwgPSAkdGhpcy5jbG9zZXN0KCcubWVudV9faXRlbScpLnByZXZBbGwoKTtcblxuXHRcdFx0JHRoaXMubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXNTdWJtZW51Lmh0bWwoXG5cdFx0XHRcdCc8ZmllbGRzZXQ+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInN3aXRjaC10b2dnbGUgc3dpdGNoLWlvc1wiPicrXG5cdFx0XHRcdFx0XHQnPGlucHV0IGlkPVwibW9kZWxzXCIgbmFtZT1cIm9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9XCJcIiB2YWx1ZT1cIm1vZGVsc1wiPicrXG5cdFx0XHRcdFx0XHQnPGxhYmVsIGZvcj1cIm1vZGVsc1wiIG9uY2xpY2s9XCJcIj7QnNC+0LTQtdC70Lg8L2xhYmVsPicrXG5cdFx0XHRcdFx0XHQnPGlucHV0IGlkPVwic2VydmljZVwiIG5hbWU9XCJvcHRpb25cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInNlcnZpY2VzXCI+Jytcblx0XHRcdFx0XHRcdCc8bGFiZWwgZm9yPVwic2VydmljZVwiIG9uY2xpY2s9XCJcIj7Qo9GB0LvRg9Cz0Lg8L2xhYmVsPicrXG5cdFx0XHRcdFx0XHQnPGE+PC9hPicrXG5cdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdCc8L2ZpZWxkc2V0Pidcblx0XHRcdCk7XG5cdFx0XHQvLyBwcmV2QWxsLmhpZGUoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH0pO1xuXG5cdFx0Ly9DbG9zZSBtb2RlbHMgc2VjdGlvblxuXHRcdCQoJy5tZW51X19zdWJtZW51LW1vYmlsZS10aXRsZScpLm9uKHRhcCxmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHR0aGlzVG9nZ2xlID0gJHRoaXMubmV4dCgpLmZpbmQoJ2ZpZWxkc2V0Jyk7XG5cblx0XHRcdCQodGhpcykuY2xvc2VzdCgnLm1lbnVfX3N1Ym1lbnUnKVxuXHRcdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzVG9nZ2xlLnJlbW92ZSgpO1xuXHRcdFx0fSwgNTAwKVxuXHRcdH0pO1xuXHRcdC8vU2xpZGUgdG9nZ2xlXG5cdFx0JCgnLnNsaWRlLXRvZ2dsZScpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcHRpb25dJyxmdW5jdGlvbigpe1xuXHRcdFx0XG5cdFx0XHR2YXIgc2VsZiA9ICQodGhpcyksXG5cdFx0XHRcdFx0aW5kZXggPSBzZWxmLmluZGV4KCksXG5cdFx0XHRcdFx0bW9kZWxzID0gJCgnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbl9tb2RlbHMnKSxcblx0XHRcdFx0XHRzZXJ2aWNlcyA9ICQoJy5tZW51X19zdWJtZW51LXNlY3Rpb25fc2VydmljZXMnKTtcblxuXHRcdFx0XHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRtb2RlbHMuZmFkZUluKDE1MClcblx0XHRcdFx0XHRcdC5zaWJsaW5ncygnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbicpXG5cdFx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKGluZGV4ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0LnNpYmxpbmdzKCcubWVudV9fc3VibWVudS1zZWN0aW9uJylcblx0XHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0vL2lmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcylcblxufSkoKTtcblxuXG5cblxuXG4iLCIvLy0tLS0tIE1lbnUgaG92ZXIgd2hpdGUgYmFja2dyb3VuZCAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24oKXtcblx0JCgnLm1lbnVfX2l0ZW0nKS5ob3ZlcihmdW5jdGlvbigpe1xuXHRcdCQoJy5uYXYnKS50b2dnbGVDbGFzcygnb24taG92ZXInKTtcblx0fSwyMDApO1xufSkoKTsiLCIvLy0tLS0tIE1haW4gc2NyZWVuIHNsaWRlciAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1haW4tc2NyZWVuIGJhbm5lciBzbGlkZXJcbi8vICQoJy5tYWluLWJhbm5lcl9fd3JhcHBlcicpLmZsaWNraXR5KHtcbi8vICAgLy8gb3B0aW9uc1xuLy8gICBjZWxsQWxpZ246ICdsZWZ0Jyxcbi8vICAgY29udGFpbjogdHJ1ZVxuLy8gfSk7XG5cbihmdW5jdGlvbigpe1xuXHQvL1ZpZGVvcyBibG9jayBzbGlkZXJcblx0JCgnLnZpZGVvX19wbGF5ZXJfanMnKS5mbGlja2l0eSh7XG5cdFx0Ly8gLy8gb3B0aW9uc1xuXHRcdC8vIGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdGNvbnRhaW46IHRydWUsXG5cdFx0c2V0R2FsbGVyeVNpemU6IGZhbHNlLFxuXHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0XG5cdH0pO1xuXG5cdCQoJy52aWRlb19fcGxheWxpc3QtbGlzdF9qcycpLmZsaWNraXR5KHtcblx0XHRcdGFzTmF2Rm9yOiAnLnZpZGVvX19wbGF5ZXJfanMnLFxuXHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0XHRwYWdlRG90czogZmFsc2Vcblx0fSk7XG5cblx0Ly8gSW5kZXggaXRlbXNcblx0JCgnLmluZGV4LWl0ZW1zX193cmFwcGVyX2pzJykuZmxpY2tpdHkoe1xuXHRcdC8vIG9wdGlvbnNcblx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRjb250YWluOiB0cnVlLFxuXHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRncm91cENlbGxzOiB0cnVlLFxuXHRcdC8vIGZyaWN0aW9uOiAwLjE1LFxuXHRcdC8vIHNlbGVjdGVkQXR0cmFjdGlvbjogMC4zLFxuXHRcdHNlbGVjdGVkQXR0cmFjdGlvbjogMC4xNSxcblx0XHRmcmljdGlvbjogMC44XG5cdH0pO1xuXHRcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0aWYoJCgnLmJyZWFkY3J1bWJzX19saXN0JykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuYnJlYWRjcnVtYnNfX2xpc3QnKS5mbGlja2l0eSh7XG5cdFx0XHRcdFx0YWNjZXNzaWJpbGl0eTogZmFsc2UsXG5cdFx0XHRcdFx0ZnJlZVNjcm9sbDogdHJ1ZSxcblx0XHRcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRcdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0XHRcdC8vc2V0R2FsbGVyeVNpemU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvL1ZpZGVvcyBibG9jayBzbGlkZXJcblx0JCgnLml0ZW0tc2xpZGVyX19pbml0JykuZmxpY2tpdHkoe1xuXHRcdC8vIC8vIG9wdGlvbnNcblx0XHQvLyBjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRjb250YWluOiB0cnVlLFxuXHRcdHNldEdhbGxlcnlTaXplOiBmYWxzZSxcblx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdHBhZ2VEb3RzOiB0cnVlXG5cdFx0XG5cdH0pO1xuXG5cdCQoJy5pdGVtLXNsaWRlcl9fdGh1bWJzLWluaXQnKS5mbGlja2l0eSh7XG5cdFx0XHRhc05hdkZvcjogJy5pdGVtLXNsaWRlcl9faW5pdCcsXG5cdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdHBhZ2VEb3RzOiBmYWxzZVxuXHR9KTtcblxuXHQvL0luZm8tcGFnZSBtZW51IG1vYmlsZSB2ZXJzaW9uIHNsaWRlclxuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdGlmKCQoJy5pbmZvLXBfX21lbnUtbGlzdCcpLmxlbmd0aCkge1xuXHRcdFx0JCgnLmluZm8tcF9fbWVudS1saXN0JykuZmxpY2tpdHkoe1xuXHRcdFx0XHRcdGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuXHRcdFx0XHRcdGZyZWVTY3JvbGw6IHRydWUsXG5cdFx0XHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdFx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0XHRcdFx0Y2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0XHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdFx0XHQvL3NldEdhbGxlcnlTaXplOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxufSkoKTsiLCJcbi8vRGV2aWRpbmcgdGl0bGUgYW5kIG90aGVyIHRleHRzIGludG8gc2VwYXJhdGUgdGFnc1xuXG5cblx0KGZ1bmN0aW9uKCl7XG5cblx0XHQkKCcuYWNjZW50ZWQtc2VydmljZXNfX2l0ZW0tdGl0bGUsIC5zaG9wLWJhbm5lcl9fdGl0bGUnKS5odG1sKGZ1bmN0aW9uIChpLCBodG1sKSB7XG5cdFx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTKykvLCAnPHNwYW4+JDE8L3NwYW4+Jyl9KTtcblxuXHRcdCQoJy5zZWN0aW9uLWhlYWRfX3RpdGxlX2ZlZWRiYWNrcycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKS8sICc8c3Bhbj4kMTwvc3Bhbj4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fYnRuX2FsbC1mZGJzJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspLywgJzxzcGFuPiQxPC9zcGFuPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX190aXRsZV92aWRlbycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKVxccyokLywgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fdGl0bGVfc2hvcC1pdGVtcycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHQgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUytcXHNcXFMrXFxzXFxTKylcXHMqJC8sICc8c3Ryb25nPiQxPC9zdHJvbmc+PGJyLz4nKVxuXHRcdH0pXG5cdH0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJcblxuLyotLS0tLS0tLS1GZWVkYmFja3MgYXVkaW9wbGF5ZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbihmdW5jdGlvbigpe1xuXHQkKCcucGxheWVyJykubWVkaWFlbGVtZW50cGxheWVyKHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihtZWRpYUVsZW1lbnQsIG9yaWdpbmFsTm9kZSkge1xuXHRcdFx0XHRcblx0XHR9LFxuXHRcdHN0cmV0Y2hpbmc6ICdyZXNwb25zaXZlJyxcblx0XHRzdGFydFZvbHVtZToxLFxuXHRcdC8vIGF1ZGlvVm9sdW1lOiAndmVydGljYWwnLFxuXHRcdGRlZmF1bHRBdWRpb0hlaWdodDogMzBcblx0XHQvLyBoaWRlVm9sdW1lT25Ub3VjaERldmljZXM6IGZhbHNlXG59KTtcbn0pKCk7XG5cblxuIiwiLy8tLS0tLSBBYm91dCBzZWN0aW9uIG1vdXNlbW92ZSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBsYXN0X3Bvc2l0aW9uID0ge30sXG4gICAgJG91dHB1dCAgICAgICA9ICQoJy5hYm91dF9fbG9nby1jaXJjbGUtc2hhZG93cycpLFxuICAgIG1vdXNlbW92ZV9vayAgPSB0cnVlLFxuICAgIG1vdXNlX3RpbWVyICAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlbW92ZV9vayA9IHRydWU7XG4gICAgfSwgNTAwKSxcbiAgICBjb3VudCAgICAgICAgID0gMTtcbiQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAobW91c2Vtb3ZlX29rKSB7XG4gICAgICAgIG1vdXNlbW92ZV9vayA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mKGxhc3RfcG9zaXRpb24ueCkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSBsYXN0X3Bvc2l0aW9uLnggLSBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGxhc3RfcG9zaXRpb24ueSAtIGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IE1hdGguYWJzKGRlbHRhWSkgJiYgZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgICAgIC8vbGVmdFxuICAgICAgICAgICAgICAgICRvdXRwdXQucmVtb3ZlQ2xhc3MoJ3RvLXJpZ2h0IHRvLXVwIHRvLWRvd24nKTtcbiAgICAgICAgICAgICAgICAkb3V0cHV0LmFkZENsYXNzKCd0by1sZWZ0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBNYXRoLmFicyhkZWx0YVkpICYmIGRlbHRhWCA8IDApIHtcbiAgICAgICAgICAgICAgICAvL3JpZ2h0XG4gICAgICAgICAgICAgICAgJG91dHB1dC5yZW1vdmVDbGFzcygndG8tbGVmdCB0by11cCB0by1kb3duJyk7XG4gICAgICAgICAgICAgICAgJG91dHB1dC5hZGRDbGFzcygndG8tcmlnaHQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkgJiYgZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgICAgICRvdXRwdXQucmVtb3ZlQ2xhc3MoJ3RvLWxlZnQgdG8tcmlnaHQgdG8tZG93bicpO1xuICAgICAgICAgICAgICAgJG91dHB1dC5hZGRDbGFzcygndG8tdXAnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkgJiYgZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgICAgICRvdXRwdXQucmVtb3ZlQ2xhc3MoJ3RvLWxlZnQgdG8tcmlnaHQgdG8tdXAnKTtcbiAgICAgICAgICAgICAgICAkb3V0cHV0LmFkZENsYXNzKCd0by1kb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJG91dHB1dC5jaGlsZHJlbigpLmxlbmd0aD4gMTApIHtcbiAgICAgICAgICAgICAgICAvLyAkb3V0cHV0LmNoaWxkcmVuKCkuZXEoMCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdF9wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHggOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgeSA6IGV2ZW50LmNsaWVudFlcbiAgICAgICAgfTtcbiAgICB9XG59KTsiLCIvLy0tLS0tIE1vYmlsZSBmb290ZXIgYWNjb3JkaW9uIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdCQoJy5mb290ZXJfX2NvbC10aXRsZScpLm9uKHRhcCwgZnVuY3Rpb24oKXtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRjb250ZW50ID0gJHRoaXMubmV4dCgpLFxuXHRcdFx0XHRcdHNpYmxUaXRsZSA9ICR0aGlzLmNsb3Nlc3QoJy5mb290ZXJfX2NvbCcpLnNpYmxpbmdzKCkuZmluZCgnLmZvb3Rlcl9fY29sLXRpdGxlJyksXG5cdFx0XHRcdFx0c2libENvbnRlbnQgPSAkdGhpcy5jbG9zZXN0KCcuZm9vdGVyX19jb2wnKS5zaWJsaW5ncygpLmZpbmQoJy5mb290ZXJfX2NvbC1saXN0Jyk7XG5cdFx0XHRcblx0XHRcdHNpYmxUaXRsZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRzaWJsQ29udGVudC5zbGlkZVVwKCk7XG5cblx0XHRcdCR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcblx0XHR9KTtcblx0fVxuXG59KSgpOyIsIi8vLS0tLS0gUHJpY2UgcGFnZSBtb2JpbGUgdmVyc2lvbiB0b2dnbGUgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0JCgnLnByaWNlLWhlYWRlcl9fbW9iaWxlLXRvZ2dsZScpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcHRpb25dJyxmdW5jdGlvbigpe1xuXHRcdFx0XG5cdFx0XHR2YXIgc2VsZiA9ICQodGhpcyksXG5cdFx0XHRcdFx0aW5kZXggPSBzZWxmLmluZGV4KCksXG5cdFx0XHRcdFx0c2VydmljZXMgPSAkKCcuc2VydmljZXNfX2NvbnRlbnRfcHJpY2UtcGFnZScpLFxuXHRcdFx0XHRcdHByaWNlU2lkZWJhciA9ICQoJy5zZXJ2aWNlc19fc2lkZWJhcl9ieS1wcm9ibGVtJyk7XG5cblx0XHRcdFx0XHRpZihpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2VydmljZXMuZmFkZUluKDE1MClcblx0XHRcdFx0XHRcdHByaWNlU2lkZWJhci5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYoaW5kZXggPT09IDIpIHtcblx0XHRcdFx0XHRcdHByaWNlU2lkZWJhci5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0c2VydmljZXMuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcbn0pKCk7IiwiLy8tLS0tLSBDYXRhbG9nIE1lbnUgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0JCgnLmNhdC1tbWVudV9fYnV0dG9uJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuY2F0YWxvZ19fZmlsdGVyJyksXG5cdFx0XHRcdG5hdiA9ICQoJy5jYXQtbW1lbnVfX25hdicpO1xuXG5cdFx0XG5cdFx0XHRcdG5hdi5zbGlkZVRvZ2dsZSgnZmFzdCcsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRwYXJlbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9KTtcblx0fSk7XG5cblx0JCgnLmNhdGFsb2dfX2ZpbHRlci1zZWxlY3RlZCcpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0cGFyZW50ID0gJHRoaXMuY2xvc2VzdCgnLmNhdGFsb2dfX2ZpbHRlcicpLFxuXHRcdFx0XHRzdWJsaXN0ID0gJCgnLmNhdGFsb2dfX3N1Ymxpc3QnKTtcblxuXHRcdFxuXHRcdFx0XHRzdWJsaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0cGFyZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLndyYXBwZXInLCBmdW5jdGlvbihlKSB7XG5cdFx0ICAgIGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXRhbG9nX19maWx0ZXItc2VsZWN0ZWQnKS5sZW5ndGggPT0gMCkge1xuXHRcdCAgICAgICAgc3VibGlzdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0ICAgICAgIFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQgICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2sud3JhcHBlcicpO1xuXHRcdCAgICB9XG5cdFx0fSk7XG5cdH0pO1xufSkoKTsiLCIvL0l0ZW0gcGFnZSB0aXRsZSBjbG9uaW5nXG4oZnVuY3Rpb24oKSB7XG5cblx0Ly8gaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjgwcHgpJykubWF0Y2hlcykge1xuXHRcdFx0JCgnLml0ZW0taW5mb19fdGl0bGUtdGV4dCcpXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5hcHBlbmRUbygnLml0ZW0taW5mb19fZGVzY3ItdGl0bGUnKTtcblx0Ly8gfVxuXG59KSgpOyIsIlxuXG4vKi0tLS0tLS0tLVBvcHVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLy9JbmZvLXBhZ2UgZ2FsbGVyeVxuXG4oZnVuY3Rpb24oKXtcblxuJCgnLmluZm8tcF9fZ2FsbGVyeS13cmFwcGVyJykubWFnbmlmaWNQb3B1cCh7XG5cdGRlbGVnYXRlOiAnYScsXG5cdHR5cGU6ICdpbWFnZScsXG5cdHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcblx0bWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuXHRnYWxsZXJ5OiB7XG5cdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG5cdFx0cHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2Vcblx0fSxcbi8vIGltYWdlOiB7XG4vLyAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4vLyAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4vLyAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4vLyAgIH1cbi8vIH1cbn0pO1xuXG59KSgpO1xuXG5cblxuIl19
