// check touch support
if( 'ontouchstart' in window ){ var tap = 'click'; }
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

	if (window.matchMedia('(min-width: 1280px)').matches) {
		$('.indemand__col').equalHeights();
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

// Setting height of .video__playlist-item_mobile-link 

(function(){
	if (window.matchMedia('(max-width: 767px)').matches) {
		var vItemHeight = $('.video__playlist-item:nth-last-of-type(2)').innerHeight();
		$('.video__playlist-item_mobile-link').height(vItemHeight);
	}
	
})();

//Cloning service page title for adaptive purposes
(function(){
	$('.services__title-text').clone().appendTo('.services__title_mob');
})();

//Quicksearch on price page
(function(){
	$('.price-header__search-input').quicksearch('.services__row');
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







//----- Menu hover white background -----
//====================================================
(function(){
	if (window.matchMedia('(min-width: 1280px)').matches) {
		$('.menu__item').hover(function(){
			$('.nav').toggleClass('on-hover');
		},100);
	}
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
		touchVerticalScroll: true
	});

	$('.video__playlist-list_js').flickity({
			asNavFor: '.video__player_js',
			contain: true,
			prevNextButtons: false,
			pageDots: false,
			touchVerticalScroll: true
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
		friction: 0.8,
		touchVerticalScroll: true
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
		pageDots: true,
		// touchVerticalScroll: true
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

(function(){
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
})();
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
				parent = $this.closest('.cat-mmenu'),
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




//----- Feedbacks length -----
//====================================================

(function(){
	var showChar = 370;
	var ellipsestext = "";
	var moretext = "раскрыть отзыв";
	var lesstext = "скрыть отзыв";
	$('.feedback__content_text').each(function () {
			var content = $(this).html();
			if (content.length > showChar) {
					var show_content = content.substr(0, showChar);
					var hide_content = content.substr(showChar, content.length - showChar);
					var html = '<span class="visible-content">' + show_content + '<span class="moreelipses">' +ellipsestext +'</span></span>'+ 
										'<span class="remaining-content"><span class="remained-text">' + 
										hide_content + '</span><a href="" class="morelink">' +
										 '<span class="morelink__text">'+moretext+
										 '</span>' + '<svg class="icon" width="7" height="5"><use xlink:href="#arrow-up-down-more"></use></svg>' +
										 '</a></span>';
					$(this).html(html);
			}
	});

	$(".morelink").click(function () {
			if ($(this).hasClass("less")) {
					$(this).removeClass("less");
					$(this).find('.morelink__text').delay(300).html(moretext);
			} else {
					$(this).addClass("less");
					$(this).find('.morelink__text').delay(300).html(lesstext);
			}
			$(this).parent().prev().find('.moreelipses').toggleClass("hide");
			$(this).prev().toggleClass("show");
			return false;
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2JpbGUtY2xvbmluZy5qcyIsIm1vYmlsZS1tZW51LmpzIiwibWVudS5qcyIsInNsaWRlcnMuanMiLCJ0aXRsZS5qcyIsImF1ZGlvLmpzIiwiYWJvdXQuanMiLCJmb290ZXIuanMiLCJtb2JpbGUtcHJpY2UtdG9nZ2xlLmpzIiwiY2F0YWxvZy1tZW51LmpzIiwiY2xvbmluZy5qcyIsInBvcHVwcy5qcyIsImZlZWRiYWNrcy1sZW5ndGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVjayB0b3VjaCBzdXBwb3J0XG5pZiggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICl7IHZhciB0YXAgPSAnY2xpY2snOyB9XG5lbHNlIHsgdmFyIHRhcCA9ICdjbGljayc7IH1cblxuLy9JbmRlbWFuZCB0YWJsZXQgdmVyc2lvbiBpdGVtcyBlcXVpbGhlaWdodHNcbihmdW5jdGlvbigpe1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpLm1hdGNoZXMgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyNzlweCknKS5tYXRjaGVzKSB7XG5cblx0XHQkKCcuaW5kZW1hbmRfX2l0ZW06bm90KC5pbmRlbWFuZF9faXRlbV9pbmRleC1tYWluKScpLmVxdWFsSGVpZ2h0cygpO1xuXHRcdCQoJy5pbmRlbWFuZF9faXRlbS10aXRsZTpub3QoLmluZGVtYW5kX19pdGVtLXRpdGxlX2luZGV4LW1haW4pJykuZXF1YWxIZWlnaHRzKCk7XG5cblx0fVxuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdC8vICQoJy5mb290ZXJfX2FkZHJlc3MnKS5lcXVhbEhlaWdodHMoKTtcblx0fVxuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTI4MHB4KScpLm1hdGNoZXMpIHtcblx0XHQkKCcuaW5kZW1hbmRfX2NvbCcpLmVxdWFsSGVpZ2h0cygpO1xuXHR9XG5cbn0pKCk7XG5cbi8vVmlkZW9zIGJsb2NrIFwic2hvdyBtb3JlIHZpZGVvc1wiIGJ1dHRvbiBjbG9uaW5nIGZvciBtb2JpbGVcbihmdW5jdGlvbigpe1xuXHQkKCcudmlkZW9fX2J0bicpLmNsb25lKCkuYXBwZW5kVG8oJy52aWRlb19fcGxheWxpc3QtaXRlbV9tb2JpbGUtbGluaycpO1xufSkoKTtcblxuLy9JbmZvIFBhZ2UgXCLQpNC+0YLQviDQvtGE0LjRgdCwXCJcbihmdW5jdGlvbigpe1xuXHQkKCcuaW5mby1wX19nYWxsZXJ5LWxpbmsnKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRnYWxsZXJ5ID0gJHRoaXMuY2xvc2VzdCgnLmluZm8tcF9fYWRkcmVzcy1pJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKCcuaW5mby1wX19nYWxsZXJ5Jyk7XG5cblx0XHRcdFx0Z2FsbGVyeS5zbGlkZVRvZ2dsZSgnZmFzdCcsIGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0XHQkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbi8vIFNldHRpbmcgaGVpZ2h0IG9mIC52aWRlb19fcGxheWxpc3QtaXRlbV9tb2JpbGUtbGluayBcblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdHZhciB2SXRlbUhlaWdodCA9ICQoJy52aWRlb19fcGxheWxpc3QtaXRlbTpudGgtbGFzdC1vZi10eXBlKDIpJykuaW5uZXJIZWlnaHQoKTtcblx0XHQkKCcudmlkZW9fX3BsYXlsaXN0LWl0ZW1fbW9iaWxlLWxpbmsnKS5oZWlnaHQodkl0ZW1IZWlnaHQpO1xuXHR9XG5cdFxufSkoKTtcblxuLy9DbG9uaW5nIHNlcnZpY2UgcGFnZSB0aXRsZSBmb3IgYWRhcHRpdmUgcHVycG9zZXNcbihmdW5jdGlvbigpe1xuXHQkKCcuc2VydmljZXNfX3RpdGxlLXRleHQnKS5jbG9uZSgpLmFwcGVuZFRvKCcuc2VydmljZXNfX3RpdGxlX21vYicpO1xufSkoKTtcblxuLy9RdWlja3NlYXJjaCBvbiBwcmljZSBwYWdlXG4oZnVuY3Rpb24oKXtcblx0JCgnLnByaWNlLWhlYWRlcl9fc2VhcmNoLWlucHV0JykucXVpY2tzZWFyY2goJy5zZXJ2aWNlc19fcm93Jyk7XG59KSgpO1xuXG4iLCJcbi8vLS0tLS0gQ2xvbmluZyBzb21lIGhlYWRlciBibG9ja3MgZm9yIGFkYXB0aXZlIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCkge1xuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXG5cdFx0JCgnLmxvZ28nKS5jbG9uZSgpLmFwcGVuZFRvKCcudG9wLWJhcl9fbW9iLWxvZ28nKTtcblx0XHQkKCcudGVsJykuY2xvbmUoKS5hcHBlbmRUbygnLnRvcC1iYXJfX21vYi10ZWwtYnRuJyk7XG5cdFx0JCgnLnRvcC1iYXJfX3dyYXBwZXInKS5jbG9uZSgpLmFwcGVuZFRvKCcubWlkLWJhcl9fbW9iLXNlYy1tZW51Jyk7XG5cdFx0JCgnLmNhdGFsb2dfX21lbnUtbGlzdCcpLmNsb25lKCkuYXBwZW5kVG8oJy5jYXQtbW1lbnVfX25hdicpO1xuXHR9XG5cdC8vQ2xvbmluZyB0aXRsZSBmb3IgcHJvdmlkaW5nIHRhcCBvbiB3aG9sZSBibG9ja1xuXHQkKCcuc2VsZWN0X19pdGVtLWNvbCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJHRoaXMgICAgID0gJCh0aGlzKTtcblx0XHRcdFx0dGhpc1RpdGxlID0gJHRoaXMuZmluZCgnLnNlbGVjdF9faXRlbS10aXRsZScpLFxuXHRcdFx0XHR0aGlzTGluayAgPSAkdGhpcy5maW5kKCcuc2VsZWN0X19tb2JpbGUtbGluaycpO1xuXG5cdFx0dGhpc1RpdGxlLmNsb25lKCkuYXBwZW5kVG8odGhpc0xpbmspO1xuXHR9KTtcblxuXHQvL0l0ZW0gcGFnZSBwcmljZSBjbG9uaW5nXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcblx0XHRcdCQoJy5pdGVtLWluZm9fX3ByaWNlLXdyYXBwZXInKVxuXHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHQuYXBwZW5kVG8oJy5pdGVtLXNsaWRlcl9fcHJpY2UnKTtcblx0fVxuXG59KSgpOyIsIlxuLy8tLS0tLSBNb2JpbGUgbWVudSBzY3JpcHRpbmcgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKSB7XG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cblx0XHQvL1RvZ2dsaW5nIGhlYWRlciBpY29ucyBzdGF0ZSB0b2dnbGVcblx0XHQkKCcudG9wLWJhcl9faGFtYnVyZ2VyLCAudG9wLWJhcl9fbW9iLWRldmljZS1idG4nKS5vbih0YXAsIGZ1bmN0aW9uKCl7XG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0aWYoJCgnLm1lbnVfX3N1Ym1lbnUnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcblx0XHRcdFx0JCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcblx0XHRcdH1cblxuXHRcdFx0aWYoJCgnLnNsaWRlLXRvZ2dsZSBmaWVsZHNldCcpLmxlbmd0aCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCgnLnNsaWRlLXRvZ2dsZSBmaWVsZHNldCcpLnJlbW92ZSgpO1xuXHRcdFx0XHR9LDEwMDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly9Ub3Agc2Vjb25kYXJ5IG1lbnVcblx0XHQkKCcudG9wLWJhcl9faGFtYnVyZ2VyJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRoYW1idXJNZW51ID0gJCgnLm1pZC1iYXInKTtcblxuXHRcdFx0aGFtYnVyTWVudS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG5cdFx0fSk7XG5cblx0XHQvL0RldmljZSBtZW51XG5cdFx0JCgnLnRvcC1iYXJfX21vYi1kZXZpY2UtYnRuJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0JCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcblx0XHR9KTtcblxuXHRcdC8vRGV2aWNlIG1lbnUgbW9kZWwgc2VsZWN0aW5nXG5cblx0XHQkKCcubWVudV9faXRlbS1saW5rJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHR0aGlzU3VibWVudSA9ICR0aGlzLm5leHQoKVxuXHRcdFx0XHRcdC5maW5kKCcuc2xpZGUtdG9nZ2xlJyk7XG5cdFx0XHQvLyBcdFx0cHJldkFsbCA9ICR0aGlzLmNsb3Nlc3QoJy5tZW51X19pdGVtJykucHJldkFsbCgpO1xuXG5cdFx0XHQkdGhpcy5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpc1N1Ym1lbnUuaHRtbChcblx0XHRcdFx0JzxmaWVsZHNldD4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3dpdGNoLXRvZ2dsZSBzd2l0Y2gtaW9zXCI+Jytcblx0XHRcdFx0XHRcdCc8aW5wdXQgaWQ9XCJtb2RlbHNcIiBuYW1lPVwib3B0aW9uXCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD1cIlwiIHZhbHVlPVwibW9kZWxzXCI+Jytcblx0XHRcdFx0XHRcdCc8bGFiZWwgZm9yPVwibW9kZWxzXCIgb25jbGljaz1cIlwiPtCc0L7QtNC10LvQuDwvbGFiZWw+Jytcblx0XHRcdFx0XHRcdCc8aW5wdXQgaWQ9XCJzZXJ2aWNlXCIgbmFtZT1cIm9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwic2VydmljZXNcIj4nK1xuXHRcdFx0XHRcdFx0JzxsYWJlbCBmb3I9XCJzZXJ2aWNlXCIgb25jbGljaz1cIlwiPtCj0YHQu9GD0LPQuDwvbGFiZWw+Jytcblx0XHRcdFx0XHRcdCc8YT48L2E+Jytcblx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0JzwvZmllbGRzZXQ+J1xuXHRcdFx0KTtcblx0XHRcdC8vIHByZXZBbGwuaGlkZSgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fSk7XG5cblx0XHQvL0Nsb3NlIG1vZGVscyBzZWN0aW9uXG5cdFx0JCgnLm1lbnVfX3N1Ym1lbnUtbW9iaWxlLXRpdGxlJykub24odGFwLGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdHRoaXNUb2dnbGUgPSAkdGhpcy5uZXh0KCkuZmluZCgnZmllbGRzZXQnKTtcblxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcubWVudV9fc3VibWVudScpXG5cdFx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXNUb2dnbGUucmVtb3ZlKCk7XG5cdFx0XHR9LCA1MDApXG5cdFx0fSk7XG5cblx0XHQvL1NsaWRlIHRvZ2dsZVxuXHRcdCQoJy5zbGlkZS10b2dnbGUnKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3B0aW9uXScsZnVuY3Rpb24oKXtcblx0XHRcdFxuXHRcdFx0dmFyIHNlbGYgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdGluZGV4ID0gc2VsZi5pbmRleCgpLFxuXHRcdFx0XHRcdG1vZGVscyA9ICQoJy5tZW51X19zdWJtZW51LXNlY3Rpb25fbW9kZWxzJyksXG5cdFx0XHRcdFx0c2VydmljZXMgPSAkKCcubWVudV9fc3VibWVudS1zZWN0aW9uX3NlcnZpY2VzJyk7XG5cblx0XHRcdFx0XHRpZihpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0bW9kZWxzLmZhZGVJbigxNTApXG5cdFx0XHRcdFx0XHQuc2libGluZ3MoJy5tZW51X19zdWJtZW51LXNlY3Rpb24nKVxuXHRcdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZihpbmRleCA9PT0gMikge1xuXHRcdFx0XHRcdFx0c2VydmljZXMuZmFkZUluKDE1MClcblx0XHRcdFx0XHRcdC5zaWJsaW5ncygnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbicpXG5cdFx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHR9KTtcblxuXHR9Ly9pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpXG5cblx0XG5cdFx0Ly8gdmFyIGZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuXHRcdC8vIFx0XHRuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJnLWZpeGVkJyk7XG5cdFx0Ly8gLy8gaWYobmF2LmNsYXNzTGlzdC5jb250YWlucygnb3BlbmVkJykpIHtcblx0XHQvLyBcdG5hdi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cblx0XHQvLyBcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBcdH0sIGZhbHNlKTtcblx0XHQvLyAvLyB9XG5cblx0XHQvLyAkKCcubmF2LWJnLWZpeGVkJykub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdC8vICAgICAvLyByZXR1cm4gZmFsc2U7XG5cdFx0Ly8gfSk7XG5cbn0pKCk7XG5cblxuXG5cblxuXG4iLCIvLy0tLS0tIE1lbnUgaG92ZXIgd2hpdGUgYmFja2dyb3VuZCAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjgwcHgpJykubWF0Y2hlcykge1xuXHRcdCQoJy5tZW51X19pdGVtJykuaG92ZXIoZnVuY3Rpb24oKXtcblx0XHRcdCQoJy5uYXYnKS50b2dnbGVDbGFzcygnb24taG92ZXInKTtcblx0XHR9LDEwMCk7XG5cdH1cbn0pKCk7XG5cbiIsIi8vLS0tLS0gTWFpbiBzY3JlZW4gc2xpZGVyIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTWFpbi1zY3JlZW4gYmFubmVyIHNsaWRlclxuLy8gJCgnLm1haW4tYmFubmVyX193cmFwcGVyJykuZmxpY2tpdHkoe1xuLy8gICAvLyBvcHRpb25zXG4vLyAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuLy8gICBjb250YWluOiB0cnVlXG4vLyB9KTtcblxuKGZ1bmN0aW9uKCl7XG5cdC8vVmlkZW9zIGJsb2NrIHNsaWRlclxuXHQkKCcudmlkZW9fX3BsYXllcl9qcycpLmZsaWNraXR5KHtcblx0XHQvLyAvLyBvcHRpb25zXG5cdFx0Ly8gY2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRzZXRHYWxsZXJ5U2l6ZTogZmFsc2UsXG5cdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHR0b3VjaFZlcnRpY2FsU2Nyb2xsOiB0cnVlXG5cdH0pO1xuXG5cdCQoJy52aWRlb19fcGxheWxpc3QtbGlzdF9qcycpLmZsaWNraXR5KHtcblx0XHRcdGFzTmF2Rm9yOiAnLnZpZGVvX19wbGF5ZXJfanMnLFxuXHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0XHR0b3VjaFZlcnRpY2FsU2Nyb2xsOiB0cnVlXG5cdH0pO1xuXG5cdC8vIEluZGV4IGl0ZW1zXG5cdCQoJy5pbmRleC1pdGVtc19fd3JhcHBlcl9qcycpLmZsaWNraXR5KHtcblx0XHQvLyBvcHRpb25zXG5cdFx0Y2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0Z3JvdXBDZWxsczogdHJ1ZSxcblx0XHQvLyBmcmljdGlvbjogMC4xNSxcblx0XHQvLyBzZWxlY3RlZEF0dHJhY3Rpb246IDAuMyxcblx0XHRzZWxlY3RlZEF0dHJhY3Rpb246IDAuMTUsXG5cdFx0ZnJpY3Rpb246IDAuOCxcblx0XHR0b3VjaFZlcnRpY2FsU2Nyb2xsOiB0cnVlXG5cdH0pO1xuXHRcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0aWYoJCgnLmJyZWFkY3J1bWJzX19saXN0JykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuYnJlYWRjcnVtYnNfX2xpc3QnKS5mbGlja2l0eSh7XG5cdFx0XHRcdFx0YWNjZXNzaWJpbGl0eTogZmFsc2UsXG5cdFx0XHRcdFx0ZnJlZVNjcm9sbDogdHJ1ZSxcblx0XHRcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRcdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0XHRcdC8vc2V0R2FsbGVyeVNpemU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvL1ZpZGVvcyBibG9jayBzbGlkZXJcblx0JCgnLml0ZW0tc2xpZGVyX19pbml0JykuZmxpY2tpdHkoe1xuXHRcdC8vIC8vIG9wdGlvbnNcblx0XHQvLyBjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRjb250YWluOiB0cnVlLFxuXHRcdHNldEdhbGxlcnlTaXplOiBmYWxzZSxcblx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdHBhZ2VEb3RzOiB0cnVlLFxuXHRcdC8vIHRvdWNoVmVydGljYWxTY3JvbGw6IHRydWVcblx0fSk7XG5cblx0JCgnLml0ZW0tc2xpZGVyX190aHVtYnMtaW5pdCcpLmZsaWNraXR5KHtcblx0XHRcdGFzTmF2Rm9yOiAnLml0ZW0tc2xpZGVyX19pbml0Jyxcblx0XHRcdGNvbnRhaW46IHRydWUsXG5cdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0cGFnZURvdHM6IGZhbHNlXG5cdH0pO1xuXG5cdC8vSW5mby1wYWdlIG1lbnUgbW9iaWxlIHZlcnNpb24gc2xpZGVyXG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0aWYoJCgnLmluZm8tcF9fbWVudS1saXN0JykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuaW5mby1wX19tZW51LWxpc3QnKS5mbGlja2l0eSh7XG5cdFx0XHRcdFx0YWNjZXNzaWJpbGl0eTogZmFsc2UsXG5cdFx0XHRcdFx0ZnJlZVNjcm9sbDogdHJ1ZSxcblx0XHRcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRcdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0XHRcdC8vc2V0R2FsbGVyeVNpemU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0XG59KSgpOyIsIlxuLy9EZXZpZGluZyB0aXRsZSBhbmQgb3RoZXIgdGV4dHMgaW50byBzZXBhcmF0ZSB0YWdzXG5cblxuXHQoZnVuY3Rpb24oKXtcblxuXHRcdCQoJy5hY2NlbnRlZC1zZXJ2aWNlc19faXRlbS10aXRsZSwgLnNob3AtYmFubmVyX190aXRsZScpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKS8sICc8c3Bhbj4kMTwvc3Bhbj4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fdGl0bGVfZmVlZGJhY2tzJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspLywgJzxzcGFuPiQxPC9zcGFuPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX19idG5fYWxsLWZkYnMnKS5odG1sKGZ1bmN0aW9uIChpLCBodG1sKSB7XG5cdFx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTKykvLCAnPHNwYW4+JDE8L3NwYW4+Jyl9KTtcblxuXHRcdCQoJy5zZWN0aW9uLWhlYWRfX3RpdGxlX3ZpZGVvJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspXFxzKiQvLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX190aXRsZV9zaG9wLWl0ZW1zJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdCAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTK1xcc1xcUytcXHNcXFMrKVxccyokLywgJzxzdHJvbmc+JDE8L3N0cm9uZz48YnIvPicpXG5cdFx0fSlcblx0fSkoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIlxuXG4vKi0tLS0tLS0tLUZlZWRiYWNrcyBhdWRpb3BsYXllclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuKGZ1bmN0aW9uKCl7XG5cdCQoJy5wbGF5ZXInKS5tZWRpYWVsZW1lbnRwbGF5ZXIoe1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lZGlhRWxlbWVudCwgb3JpZ2luYWxOb2RlKSB7XG5cdFx0XHRcdFxuXHRcdH0sXG5cdFx0c3RyZXRjaGluZzogJ3Jlc3BvbnNpdmUnLFxuXHRcdHN0YXJ0Vm9sdW1lOjEsXG5cdFx0Ly8gYXVkaW9Wb2x1bWU6ICd2ZXJ0aWNhbCcsXG5cdFx0ZGVmYXVsdEF1ZGlvSGVpZ2h0OiAzMFxuXHRcdC8vIGhpZGVWb2x1bWVPblRvdWNoRGV2aWNlczogZmFsc2Vcbn0pO1xufSkoKTtcblxuXG4iLCIvLy0tLS0tIEFib3V0IHNlY3Rpb24gbW91c2Vtb3ZlIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCl7XG5cdHZhciBsYXN0X3Bvc2l0aW9uID0ge30sXG5cdFx0JG91dHB1dCAgICAgICA9ICQoJy5hYm91dF9fbG9nby1jaXJjbGUtc2hhZG93cycpLFxuXHRcdG1vdXNlbW92ZV9vayAgPSB0cnVlLFxuXHRcdG1vdXNlX3RpbWVyICAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0XHRtb3VzZW1vdmVfb2sgPSB0cnVlO1xuXHRcdH0sIDUwMCksXG5cdFx0Y291bnQgICAgICAgICA9IDE7XG5cdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRpZiAobW91c2Vtb3ZlX29rKSB7XG5cdFx0XHRtb3VzZW1vdmVfb2sgPSBmYWxzZTtcblx0XHRcdGlmICh0eXBlb2YobGFzdF9wb3NpdGlvbi54KSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR2YXIgZGVsdGFYID0gbGFzdF9wb3NpdGlvbi54IC0gZXZlbnQuY2xpZW50WCxcblx0XHRcdFx0XHRkZWx0YVkgPSBsYXN0X3Bvc2l0aW9uLnkgLSBldmVudC5jbGllbnRZO1xuXHRcdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IE1hdGguYWJzKGRlbHRhWSkgJiYgZGVsdGFYID4gMCkge1xuXHRcdFx0XHRcdC8vbGVmdFxuXHRcdFx0XHRcdCRvdXRwdXQucmVtb3ZlQ2xhc3MoJ3RvLXJpZ2h0IHRvLXVwIHRvLWRvd24nKTtcblx0XHRcdFx0XHQkb3V0cHV0LmFkZENsYXNzKCd0by1sZWZ0Jyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IE1hdGguYWJzKGRlbHRhWSkgJiYgZGVsdGFYIDwgMCkge1xuXHRcdFx0XHRcdC8vcmlnaHRcblx0XHRcdFx0XHQkb3V0cHV0LnJlbW92ZUNsYXNzKCd0by1sZWZ0IHRvLXVwIHRvLWRvd24nKTtcblx0XHRcdFx0XHQkb3V0cHV0LmFkZENsYXNzKCd0by1yaWdodCcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpICYmIGRlbHRhWSA+IDApIHtcblx0XHRcdFx0XHQvL3VwXG5cdFx0XHRcdCAgICRvdXRwdXQucmVtb3ZlQ2xhc3MoJ3RvLWxlZnQgdG8tcmlnaHQgdG8tZG93bicpO1xuXHRcdFx0XHQgICAkb3V0cHV0LmFkZENsYXNzKCd0by11cCcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpICYmIGRlbHRhWSA8IDApIHtcblx0XHRcdFx0XHQvL2Rvd25cblx0XHRcdFx0XHQkb3V0cHV0LnJlbW92ZUNsYXNzKCd0by1sZWZ0IHRvLXJpZ2h0IHRvLXVwJyk7XG5cdFx0XHRcdFx0JG91dHB1dC5hZGRDbGFzcygndG8tZG93bicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkb3V0cHV0LmNoaWxkcmVuKCkubGVuZ3RoPiAxMCkge1xuXHRcdFx0XHRcdC8vICRvdXRwdXQuY2hpbGRyZW4oKS5lcSgwKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGFzdF9wb3NpdGlvbiA9IHtcblx0XHRcdFx0eCA6IGV2ZW50LmNsaWVudFgsXG5cdFx0XHRcdHkgOiBldmVudC5jbGllbnRZXG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG59KSgpOyIsIi8vLS0tLS0gTW9iaWxlIGZvb3RlciBhY2NvcmRpb24gLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0JCgnLmZvb3Rlcl9fY29sLXRpdGxlJykub24odGFwLCBmdW5jdGlvbigpe1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdGNvbnRlbnQgPSAkdGhpcy5uZXh0KCksXG5cdFx0XHRcdFx0c2libFRpdGxlID0gJHRoaXMuY2xvc2VzdCgnLmZvb3Rlcl9fY29sJykuc2libGluZ3MoKS5maW5kKCcuZm9vdGVyX19jb2wtdGl0bGUnKSxcblx0XHRcdFx0XHRzaWJsQ29udGVudCA9ICR0aGlzLmNsb3Nlc3QoJy5mb290ZXJfX2NvbCcpLnNpYmxpbmdzKCkuZmluZCgnLmZvb3Rlcl9fY29sLWxpc3QnKTtcblx0XHRcdFxuXHRcdFx0c2libFRpdGxlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHNpYmxDb250ZW50LnNsaWRlVXAoKTtcblxuXHRcdFx0JHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0Y29udGVudC5zbGlkZVRvZ2dsZSgpO1xuXHRcdH0pO1xuXHR9XG5cbn0pKCk7IiwiLy8tLS0tLSBQcmljZSBwYWdlIG1vYmlsZSB2ZXJzaW9uIHRvZ2dsZSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpe1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHQkKCcucHJpY2UtaGVhZGVyX19tb2JpbGUtdG9nZ2xlJykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9wdGlvbl0nLGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBzZWxmID0gJCh0aGlzKSxcblx0XHRcdFx0XHRpbmRleCA9IHNlbGYuaW5kZXgoKSxcblx0XHRcdFx0XHRzZXJ2aWNlcyA9ICQoJy5zZXJ2aWNlc19fY29udGVudF9wcmljZS1wYWdlJyksXG5cdFx0XHRcdFx0cHJpY2VTaWRlYmFyID0gJCgnLnNlcnZpY2VzX19zaWRlYmFyX2J5LXByb2JsZW0nKTtcblxuXHRcdFx0XHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0cHJpY2VTaWRlYmFyLmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZihpbmRleCA9PT0gMikge1xuXHRcdFx0XHRcdFx0cHJpY2VTaWRlYmFyLmZhZGVJbigxNTApXG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxufSkoKTsiLCIvLy0tLS0tIENhdGFsb2cgTWVudSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpe1xuXHQkKCcuY2F0LW1tZW51X19idXR0b24nKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdHBhcmVudCA9ICR0aGlzLmNsb3Nlc3QoJy5jYXQtbW1lbnUnKSxcblx0XHRcdFx0bmF2ID0gJCgnLmNhdC1tbWVudV9fbmF2Jyk7XG5cblx0XHRcblx0XHRcdFx0bmF2LnNsaWRlVG9nZ2xlKCdmYXN0JyxmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHBhcmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH0pO1xuXHR9KTtcblxuXHQkKCcuY2F0YWxvZ19fZmlsdGVyLXNlbGVjdGVkJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuY2F0YWxvZ19fZmlsdGVyJyksXG5cdFx0XHRcdHN1Ymxpc3QgPSAkKCcuY2F0YWxvZ19fc3VibGlzdCcpO1xuXG5cdFx0XG5cdFx0XHRcdHN1Ymxpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRwYXJlbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0JChkb2N1bWVudCkuYmluZCgnY2xpY2sud3JhcHBlcicsIGZ1bmN0aW9uKGUpIHtcblx0XHQgICAgaWYoJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhdGFsb2dfX2ZpbHRlci1zZWxlY3RlZCcpLmxlbmd0aCA9PSAwKSB7XG5cdFx0ICAgICAgICBzdWJsaXN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQgICAgICAgXHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay53cmFwcGVyJyk7XG5cdFx0ICAgIH1cblx0XHR9KTtcblx0fSk7XG59KSgpOyIsIi8vSXRlbSBwYWdlIHRpdGxlIGNsb25pbmdcbihmdW5jdGlvbigpIHtcblxuXHQvLyBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyODBweCknKS5tYXRjaGVzKSB7XG5cdFx0XHQkKCcuaXRlbS1pbmZvX190aXRsZS10ZXh0Jylcblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmFwcGVuZFRvKCcuaXRlbS1pbmZvX19kZXNjci10aXRsZScpO1xuXHQvLyB9XG5cbn0pKCk7IiwiXG5cbi8qLS0tLS0tLS0tUG9wdXBzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vL0luZm8tcGFnZSBnYWxsZXJ5XG5cbihmdW5jdGlvbigpe1xuXG4kKCcuaW5mby1wX19nYWxsZXJ5LXdyYXBwZXInKS5tYWduaWZpY1BvcHVwKHtcblx0ZGVsZWdhdGU6ICdhJyxcblx0dHlwZTogJ2ltYWdlJyxcblx0dExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuXHRtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG5cdGdhbGxlcnk6IHtcblx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcblx0XHRwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuXHR9LFxuLy8gaW1hZ2U6IHtcbi8vICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbi8vICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbi8vICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+Jztcbi8vICAgfVxuLy8gfVxufSk7XG5cbn0pKCk7XG5cblxuXG4iLCIvLy0tLS0tIEZlZWRiYWNrcyBsZW5ndGggLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0dmFyIHNob3dDaGFyID0gMzcwO1xuXHR2YXIgZWxsaXBzZXN0ZXh0ID0gXCJcIjtcblx0dmFyIG1vcmV0ZXh0ID0gXCLRgNCw0YHQutGA0YvRgtGMINC+0YLQt9GL0LJcIjtcblx0dmFyIGxlc3N0ZXh0ID0gXCLRgdC60YDRi9GC0Ywg0L7RgtC30YvQslwiO1xuXHQkKCcuZmVlZGJhY2tfX2NvbnRlbnRfdGV4dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcblx0XHRcdGlmIChjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XG5cdFx0XHRcdFx0dmFyIHNob3dfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcblx0XHRcdFx0XHR2YXIgaGlkZV9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc2hvd0NoYXIsIGNvbnRlbnQubGVuZ3RoIC0gc2hvd0NoYXIpO1xuXHRcdFx0XHRcdHZhciBodG1sID0gJzxzcGFuIGNsYXNzPVwidmlzaWJsZS1jb250ZW50XCI+JyArIHNob3dfY29udGVudCArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGlwc2VzXCI+JyArZWxsaXBzZXN0ZXh0ICsnPC9zcGFuPjwvc3Bhbj4nKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwicmVtYWluaW5nLWNvbnRlbnRcIj48c3BhbiBjbGFzcz1cInJlbWFpbmVkLXRleHRcIj4nICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGVfY29udGVudCArICc8L3NwYW4+PGEgaHJlZj1cIlwiIGNsYXNzPVwibW9yZWxpbmtcIj4nICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICc8c3BhbiBjbGFzcz1cIm1vcmVsaW5rX190ZXh0XCI+Jyttb3JldGV4dCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICc8L3NwYW4+JyArICc8c3ZnIGNsYXNzPVwiaWNvblwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjVcIj48dXNlIHhsaW5rOmhyZWY9XCIjYXJyb3ctdXAtZG93bi1tb3JlXCI+PC91c2U+PC9zdmc+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAnPC9hPjwvc3Bhbj4nO1xuXHRcdFx0XHRcdCQodGhpcykuaHRtbChodG1sKTtcblx0XHRcdH1cblx0fSk7XG5cblx0JChcIi5tb3JlbGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwibGVzc1wiKTtcblx0XHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5tb3JlbGlua19fdGV4dCcpLmRlbGF5KDMwMCkuaHRtbChtb3JldGV4dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLm1vcmVsaW5rX190ZXh0JykuZGVsYXkoMzAwKS5odG1sKGxlc3N0ZXh0KTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykucGFyZW50KCkucHJldigpLmZpbmQoJy5tb3JlZWxpcHNlcycpLnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcblx0XHRcdCQodGhpcykucHJldigpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59KSgpOyJdfQ==
