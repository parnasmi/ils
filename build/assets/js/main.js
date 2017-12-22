// check touch support
if( 'ontouchstart' in window ){ var tap = 'click'; }
else { var tap = 'click'; }

//Indemand tablet version items equilheights

(function(){
	if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1279px)').matches) {
		// $('.indemand__item:not(.indemand__item_index-main)').equalHeights();
		$('.indemand__item-title:not(.indemand__item-title_index-main)').equalHeights();
	}

	if (window.matchMedia('(max-width: 767px)').matches) {
		// $('.footer__address').equalHeights();
	}

	if (window.matchMedia('(min-width: 767px)').matches) {
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

//Quicksearch

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

	
		var fixed = document.querySelector('body'),
				nav = document.querySelector('.nav');
		// if(nav.classList.contains('opened')) {
			document.body.addEventListener('touchmove', function(e) {

			e.preventDefault();
			}, false);
		// }

		

})();







//----- Menu hover white background -----
//====================================================
(function(){
	$('.menu__item').hover(function(){
		$('.nav').toggleClass('on-hover');
	},100);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2JpbGUtY2xvbmluZy5qcyIsIm1vYmlsZS1tZW51LmpzIiwibWVudS5qcyIsInNsaWRlcnMuanMiLCJ0aXRsZS5qcyIsImF1ZGlvLmpzIiwiYWJvdXQuanMiLCJmb290ZXIuanMiLCJtb2JpbGUtcHJpY2UtdG9nZ2xlLmpzIiwiY2F0YWxvZy1tZW51LmpzIiwiY2xvbmluZy5qcyIsInBvcHVwcy5qcyIsImZlZWRiYWNrcy1sZW5ndGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVjayB0b3VjaCBzdXBwb3J0XG5pZiggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICl7IHZhciB0YXAgPSAnY2xpY2snOyB9XG5lbHNlIHsgdmFyIHRhcCA9ICdjbGljayc7IH1cblxuLy9JbmRlbWFuZCB0YWJsZXQgdmVyc2lvbiBpdGVtcyBlcXVpbGhlaWdodHNcblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcyAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI3OXB4KScpLm1hdGNoZXMpIHtcblx0XHQvLyAkKCcuaW5kZW1hbmRfX2l0ZW06bm90KC5pbmRlbWFuZF9faXRlbV9pbmRleC1tYWluKScpLmVxdWFsSGVpZ2h0cygpO1xuXHRcdCQoJy5pbmRlbWFuZF9faXRlbS10aXRsZTpub3QoLmluZGVtYW5kX19pdGVtLXRpdGxlX2luZGV4LW1haW4pJykuZXF1YWxIZWlnaHRzKCk7XG5cdH1cblxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHQvLyAkKCcuZm9vdGVyX19hZGRyZXNzJykuZXF1YWxIZWlnaHRzKCk7XG5cdH1cblxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHQkKCcuaW5kZW1hbmRfX2NvbCcpLmVxdWFsSGVpZ2h0cygpO1xuXHR9XG5cblx0XG5cbn0pKCk7XG5cblxuXG4vL1ZpZGVvcyBibG9jayBcInNob3cgbW9yZSB2aWRlb3NcIiBidXR0b24gY2xvbmluZyBmb3IgbW9iaWxlXG4oZnVuY3Rpb24oKXtcblx0JCgnLnZpZGVvX19idG4nKS5jbG9uZSgpLmFwcGVuZFRvKCcudmlkZW9fX3BsYXlsaXN0LWl0ZW1fbW9iaWxlLWxpbmsnKTtcbn0pKCk7XG5cbi8vSW5mbyBQYWdlIFwi0KTQvtGC0L4g0L7RhNC40YHQsFwiXG5cbihmdW5jdGlvbigpe1xuXHQkKCcuaW5mby1wX19nYWxsZXJ5LWxpbmsnKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRnYWxsZXJ5ID0gJHRoaXMuY2xvc2VzdCgnLmluZm8tcF9fYWRkcmVzcy1pJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKCcuaW5mby1wX19nYWxsZXJ5Jyk7XG5cblx0XHRcdFx0Z2FsbGVyeS5zbGlkZVRvZ2dsZSgnZmFzdCcsIGZ1bmN0aW9uKCl7XG5cblx0XHRcdFx0XHQkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbi8vIFNldHRpbmcgaGVpZ2h0IG9mIC52aWRlb19fcGxheWxpc3QtaXRlbV9tb2JpbGUtbGluayBcblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdHZhciB2SXRlbUhlaWdodCA9ICQoJy52aWRlb19fcGxheWxpc3QtaXRlbTpudGgtbGFzdC1vZi10eXBlKDIpJykuaW5uZXJIZWlnaHQoKTtcblx0XHQkKCcudmlkZW9fX3BsYXlsaXN0LWl0ZW1fbW9iaWxlLWxpbmsnKS5oZWlnaHQodkl0ZW1IZWlnaHQpO1xuXHR9XG5cdFxufSkoKTtcblxuLy9DbG9uaW5nIHNlcnZpY2UgcGFnZSB0aXRsZSBmb3IgYWRhcHRpdmUgcHVycG9zZXNcbihmdW5jdGlvbigpe1xuXHQkKCcuc2VydmljZXNfX3RpdGxlLXRleHQnKS5jbG9uZSgpLmFwcGVuZFRvKCcuc2VydmljZXNfX3RpdGxlX21vYicpO1xufSkoKTtcblxuLy9RdWlja3NlYXJjaFxuXG4oZnVuY3Rpb24oKXtcblx0JCgnLnByaWNlLWhlYWRlcl9fc2VhcmNoLWlucHV0JykucXVpY2tzZWFyY2goJy5zZXJ2aWNlc19fcm93Jyk7XG59KSgpO1xuXG5cblxuXG5cblxuXG5cbiIsIlxuLy8tLS0tLSBDbG9uaW5nIHNvbWUgaGVhZGVyIGJsb2NrcyBmb3IgYWRhcHRpdmUgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKSB7XG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cblx0XHQkKCcubG9nbycpLmNsb25lKCkuYXBwZW5kVG8oJy50b3AtYmFyX19tb2ItbG9nbycpO1xuXHRcdCQoJy50ZWwnKS5jbG9uZSgpLmFwcGVuZFRvKCcudG9wLWJhcl9fbW9iLXRlbC1idG4nKTtcblx0XHQkKCcudG9wLWJhcl9fd3JhcHBlcicpLmNsb25lKCkuYXBwZW5kVG8oJy5taWQtYmFyX19tb2Itc2VjLW1lbnUnKTtcblx0XHQkKCcuY2F0YWxvZ19fbWVudS1saXN0JykuY2xvbmUoKS5hcHBlbmRUbygnLmNhdC1tbWVudV9fbmF2Jyk7XG5cdH1cblx0Ly9DbG9uaW5nIHRpdGxlIGZvciBwcm92aWRpbmcgdGFwIG9uIHdob2xlIGJsb2NrXG5cdCQoJy5zZWxlY3RfX2l0ZW0tY29sJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdHZhciAkdGhpcyAgICAgPSAkKHRoaXMpO1xuXHRcdFx0XHR0aGlzVGl0bGUgPSAkdGhpcy5maW5kKCcuc2VsZWN0X19pdGVtLXRpdGxlJyksXG5cdFx0XHRcdHRoaXNMaW5rICA9ICR0aGlzLmZpbmQoJy5zZWxlY3RfX21vYmlsZS1saW5rJyk7XG5cblx0XHR0aGlzVGl0bGUuY2xvbmUoKS5hcHBlbmRUbyh0aGlzTGluayk7XG5cdH0pO1xuXG5cdC8vSXRlbSBwYWdlIHByaWNlIGNsb25pbmdcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJykubWF0Y2hlcykge1xuXHRcdFx0JCgnLml0ZW0taW5mb19fcHJpY2Utd3JhcHBlcicpXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5hcHBlbmRUbygnLml0ZW0tc2xpZGVyX19wcmljZScpO1xuXHR9XG5cbn0pKCk7IiwiXG4vLy0tLS0tIE1vYmlsZSBtZW51IHNjcmlwdGluZyAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpIHtcblxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblxuXHRcdC8vVG9nZ2xpbmcgaGVhZGVyIGljb25zIHN0YXRlIHRvZ2dsZVxuXHRcdCQoJy50b3AtYmFyX19oYW1idXJnZXIsIC50b3AtYmFyX19tb2ItZGV2aWNlLWJ0bicpLm9uKHRhcCwgZnVuY3Rpb24oKXtcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRpZigkKCcubWVudV9fc3VibWVudScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuXHRcdFx0XHQkKCcubWVudV9fc3VibWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXHRcdFx0fVxuXG5cdFx0XHRpZigkKCcuc2xpZGUtdG9nZ2xlIGZpZWxkc2V0JykubGVuZ3RoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQkKCcuc2xpZGUtdG9nZ2xlIGZpZWxkc2V0JykucmVtb3ZlKCk7XG5cdFx0XHRcdH0sMTAwMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1RvcCBzZWNvbmRhcnkgbWVudVxuXHRcdCQoJy50b3AtYmFyX19oYW1idXJnZXInKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdGhhbWJ1ck1lbnUgPSAkKCcubWlkLWJhcicpO1xuXG5cdFx0XHRoYW1idXJNZW51LnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcblx0XHR9KTtcblxuXHRcdC8vRGV2aWNlIG1lbnVcblx0XHQkKCcudG9wLWJhcl9fbW9iLWRldmljZS1idG4nKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuXHRcdH0pO1xuXG5cdFx0Ly9EZXZpY2UgbWVudSBtb2RlbCBzZWxlY3RpbmdcblxuXHRcdCQoJy5tZW51X19pdGVtLWxpbmsnKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdHRoaXNTdWJtZW51ID0gJHRoaXMubmV4dCgpXG5cdFx0XHRcdFx0LmZpbmQoJy5zbGlkZS10b2dnbGUnKTtcblx0XHRcdC8vIFx0XHRwcmV2QWxsID0gJHRoaXMuY2xvc2VzdCgnLm1lbnVfX2l0ZW0nKS5wcmV2QWxsKCk7XG5cblx0XHRcdCR0aGlzLm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzU3VibWVudS5odG1sKFxuXHRcdFx0XHQnPGZpZWxkc2V0PicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJzd2l0Y2gtdG9nZ2xlIHN3aXRjaC1pb3NcIj4nK1xuXHRcdFx0XHRcdFx0JzxpbnB1dCBpZD1cIm1vZGVsc1wiIG5hbWU9XCJvcHRpb25cIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPVwiXCIgdmFsdWU9XCJtb2RlbHNcIj4nK1xuXHRcdFx0XHRcdFx0JzxsYWJlbCBmb3I9XCJtb2RlbHNcIiBvbmNsaWNrPVwiXCI+0JzQvtC00LXQu9C4PC9sYWJlbD4nK1xuXHRcdFx0XHRcdFx0JzxpbnB1dCBpZD1cInNlcnZpY2VcIiBuYW1lPVwib3B0aW9uXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJzZXJ2aWNlc1wiPicrXG5cdFx0XHRcdFx0XHQnPGxhYmVsIGZvcj1cInNlcnZpY2VcIiBvbmNsaWNrPVwiXCI+0KPRgdC70YPQs9C4PC9sYWJlbD4nK1xuXHRcdFx0XHRcdFx0JzxhPjwvYT4nK1xuXHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHQnPC9maWVsZHNldD4nXG5cdFx0XHQpO1xuXHRcdFx0Ly8gcHJldkFsbC5oaWRlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9KTtcblxuXHRcdC8vQ2xvc2UgbW9kZWxzIHNlY3Rpb25cblx0XHQkKCcubWVudV9fc3VibWVudS1tb2JpbGUtdGl0bGUnKS5vbih0YXAsZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdFx0dGhpc1RvZ2dsZSA9ICR0aGlzLm5leHQoKS5maW5kKCdmaWVsZHNldCcpO1xuXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19zdWJtZW51Jylcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0dGhpc1RvZ2dsZS5yZW1vdmUoKTtcblx0XHRcdH0sIDUwMClcblx0XHR9KTtcblxuXHRcdC8vU2xpZGUgdG9nZ2xlXG5cdFx0JCgnLnNsaWRlLXRvZ2dsZScpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcHRpb25dJyxmdW5jdGlvbigpe1xuXHRcdFx0XG5cdFx0XHR2YXIgc2VsZiA9ICQodGhpcyksXG5cdFx0XHRcdFx0aW5kZXggPSBzZWxmLmluZGV4KCksXG5cdFx0XHRcdFx0bW9kZWxzID0gJCgnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbl9tb2RlbHMnKSxcblx0XHRcdFx0XHRzZXJ2aWNlcyA9ICQoJy5tZW51X19zdWJtZW51LXNlY3Rpb25fc2VydmljZXMnKTtcblxuXHRcdFx0XHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRtb2RlbHMuZmFkZUluKDE1MClcblx0XHRcdFx0XHRcdC5zaWJsaW5ncygnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbicpXG5cdFx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKGluZGV4ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0LnNpYmxpbmdzKCcubWVudV9fc3VibWVudS1zZWN0aW9uJylcblx0XHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0vL2lmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcylcblxuXHRcblx0XHR2YXIgZml4ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG5cdFx0XHRcdG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcblx0XHQvLyBpZihuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHQvLyB9XG5cblx0XHRcblxufSkoKTtcblxuXG5cblxuXG5cbiIsIi8vLS0tLS0gTWVudSBob3ZlciB3aGl0ZSBiYWNrZ3JvdW5kIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbigpe1xuXHQkKCcubWVudV9faXRlbScpLmhvdmVyKGZ1bmN0aW9uKCl7XG5cdFx0JCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdvbi1ob3ZlcicpO1xuXHR9LDEwMCk7XG59KSgpO1xuXG4iLCIvLy0tLS0tIE1haW4gc2NyZWVuIHNsaWRlciAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1haW4tc2NyZWVuIGJhbm5lciBzbGlkZXJcbi8vICQoJy5tYWluLWJhbm5lcl9fd3JhcHBlcicpLmZsaWNraXR5KHtcbi8vICAgLy8gb3B0aW9uc1xuLy8gICBjZWxsQWxpZ246ICdsZWZ0Jyxcbi8vICAgY29udGFpbjogdHJ1ZVxuLy8gfSk7XG5cbihmdW5jdGlvbigpe1xuXHQvL1ZpZGVvcyBibG9jayBzbGlkZXJcblx0JCgnLnZpZGVvX19wbGF5ZXJfanMnKS5mbGlja2l0eSh7XG5cdFx0Ly8gLy8gb3B0aW9uc1xuXHRcdC8vIGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdGNvbnRhaW46IHRydWUsXG5cdFx0c2V0R2FsbGVyeVNpemU6IGZhbHNlLFxuXHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0dG91Y2hWZXJ0aWNhbFNjcm9sbDogdHJ1ZVxuXHR9KTtcblxuXHQkKCcudmlkZW9fX3BsYXlsaXN0LWxpc3RfanMnKS5mbGlja2l0eSh7XG5cdFx0XHRhc05hdkZvcjogJy52aWRlb19fcGxheWVyX2pzJyxcblx0XHRcdGNvbnRhaW46IHRydWUsXG5cdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0cGFnZURvdHM6IGZhbHNlLFxuXHRcdFx0dG91Y2hWZXJ0aWNhbFNjcm9sbDogdHJ1ZVxuXHR9KTtcblxuXHQvLyBJbmRleCBpdGVtc1xuXHQkKCcuaW5kZXgtaXRlbXNfX3dyYXBwZXJfanMnKS5mbGlja2l0eSh7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdGNvbnRhaW46IHRydWUsXG5cdFx0cGFnZURvdHM6IGZhbHNlLFxuXHRcdGdyb3VwQ2VsbHM6IHRydWUsXG5cdFx0Ly8gZnJpY3Rpb246IDAuMTUsXG5cdFx0Ly8gc2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjMsXG5cdFx0c2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjE1LFxuXHRcdGZyaWN0aW9uOiAwLjgsXG5cdFx0dG91Y2hWZXJ0aWNhbFNjcm9sbDogdHJ1ZVxuXHR9KTtcblx0XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdGlmKCQoJy5icmVhZGNydW1ic19fbGlzdCcpLmxlbmd0aCkge1xuXHRcdFx0JCgnLmJyZWFkY3J1bWJzX19saXN0JykuZmxpY2tpdHkoe1xuXHRcdFx0XHRcdGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuXHRcdFx0XHRcdGZyZWVTY3JvbGw6IHRydWUsXG5cdFx0XHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdFx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0XHRcdFx0Y2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0XHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdFx0XHQvL3NldEdhbGxlcnlTaXplOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly9WaWRlb3MgYmxvY2sgc2xpZGVyXG5cdCQoJy5pdGVtLXNsaWRlcl9faW5pdCcpLmZsaWNraXR5KHtcblx0XHQvLyAvLyBvcHRpb25zXG5cdFx0Ly8gY2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRzZXRHYWxsZXJ5U2l6ZTogZmFsc2UsXG5cdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRwYWdlRG90czogdHJ1ZSxcblx0XHQvLyB0b3VjaFZlcnRpY2FsU2Nyb2xsOiB0cnVlXG5cdH0pO1xuXG5cdCQoJy5pdGVtLXNsaWRlcl9fdGh1bWJzLWluaXQnKS5mbGlja2l0eSh7XG5cdFx0XHRhc05hdkZvcjogJy5pdGVtLXNsaWRlcl9faW5pdCcsXG5cdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdHBhZ2VEb3RzOiBmYWxzZVxuXHR9KTtcblxuXHQvL0luZm8tcGFnZSBtZW51IG1vYmlsZSB2ZXJzaW9uIHNsaWRlclxuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdGlmKCQoJy5pbmZvLXBfX21lbnUtbGlzdCcpLmxlbmd0aCkge1xuXHRcdFx0JCgnLmluZm8tcF9fbWVudS1saXN0JykuZmxpY2tpdHkoe1xuXHRcdFx0XHRcdGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuXHRcdFx0XHRcdGZyZWVTY3JvbGw6IHRydWUsXG5cdFx0XHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdFx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0XHRcdFx0Y2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0XHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdFx0XHQvL3NldEdhbGxlcnlTaXplOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxufSkoKTsiLCJcbi8vRGV2aWRpbmcgdGl0bGUgYW5kIG90aGVyIHRleHRzIGludG8gc2VwYXJhdGUgdGFnc1xuXG5cblx0KGZ1bmN0aW9uKCl7XG5cblx0XHQkKCcuYWNjZW50ZWQtc2VydmljZXNfX2l0ZW0tdGl0bGUsIC5zaG9wLWJhbm5lcl9fdGl0bGUnKS5odG1sKGZ1bmN0aW9uIChpLCBodG1sKSB7XG5cdFx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTKykvLCAnPHNwYW4+JDE8L3NwYW4+Jyl9KTtcblxuXHRcdCQoJy5zZWN0aW9uLWhlYWRfX3RpdGxlX2ZlZWRiYWNrcycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKS8sICc8c3Bhbj4kMTwvc3Bhbj4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fYnRuX2FsbC1mZGJzJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspLywgJzxzcGFuPiQxPC9zcGFuPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX190aXRsZV92aWRlbycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKVxccyokLywgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fdGl0bGVfc2hvcC1pdGVtcycpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHQgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUytcXHNcXFMrXFxzXFxTKylcXHMqJC8sICc8c3Ryb25nPiQxPC9zdHJvbmc+PGJyLz4nKVxuXHRcdH0pXG5cdH0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJcblxuLyotLS0tLS0tLS1GZWVkYmFja3MgYXVkaW9wbGF5ZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbihmdW5jdGlvbigpe1xuXHQkKCcucGxheWVyJykubWVkaWFlbGVtZW50cGxheWVyKHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihtZWRpYUVsZW1lbnQsIG9yaWdpbmFsTm9kZSkge1xuXHRcdFx0XHRcblx0XHR9LFxuXHRcdHN0cmV0Y2hpbmc6ICdyZXNwb25zaXZlJyxcblx0XHRzdGFydFZvbHVtZToxLFxuXHRcdC8vIGF1ZGlvVm9sdW1lOiAndmVydGljYWwnLFxuXHRcdGRlZmF1bHRBdWRpb0hlaWdodDogMzBcblx0XHQvLyBoaWRlVm9sdW1lT25Ub3VjaERldmljZXM6IGZhbHNlXG59KTtcbn0pKCk7XG5cblxuIiwiLy8tLS0tLSBBYm91dCBzZWN0aW9uIG1vdXNlbW92ZSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpe1xuXHR2YXIgbGFzdF9wb3NpdGlvbiA9IHt9LFxuXHRcdCRvdXRwdXQgICAgICAgPSAkKCcuYWJvdXRfX2xvZ28tY2lyY2xlLXNoYWRvd3MnKSxcblx0XHRtb3VzZW1vdmVfb2sgID0gdHJ1ZSxcblx0XHRtb3VzZV90aW1lciAgID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0bW91c2Vtb3ZlX29rID0gdHJ1ZTtcblx0XHR9LCA1MDApLFxuXHRcdGNvdW50ICAgICAgICAgPSAxO1xuXHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0aWYgKG1vdXNlbW92ZV9vaykge1xuXHRcdFx0bW91c2Vtb3ZlX29rID0gZmFsc2U7XG5cdFx0XHRpZiAodHlwZW9mKGxhc3RfcG9zaXRpb24ueCkgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dmFyIGRlbHRhWCA9IGxhc3RfcG9zaXRpb24ueCAtIGV2ZW50LmNsaWVudFgsXG5cdFx0XHRcdFx0ZGVsdGFZID0gbGFzdF9wb3NpdGlvbi55IC0gZXZlbnQuY2xpZW50WTtcblx0XHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhWCkgPiBNYXRoLmFicyhkZWx0YVkpICYmIGRlbHRhWCA+IDApIHtcblx0XHRcdFx0XHQvL2xlZnRcblx0XHRcdFx0XHQkb3V0cHV0LnJlbW92ZUNsYXNzKCd0by1yaWdodCB0by11cCB0by1kb3duJyk7XG5cdFx0XHRcdFx0JG91dHB1dC5hZGRDbGFzcygndG8tbGVmdCcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBNYXRoLmFicyhkZWx0YVkpICYmIGRlbHRhWCA8IDApIHtcblx0XHRcdFx0XHQvL3JpZ2h0XG5cdFx0XHRcdFx0JG91dHB1dC5yZW1vdmVDbGFzcygndG8tbGVmdCB0by11cCB0by1kb3duJyk7XG5cdFx0XHRcdFx0JG91dHB1dC5hZGRDbGFzcygndG8tcmlnaHQnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSAmJiBkZWx0YVkgPiAwKSB7XG5cdFx0XHRcdFx0Ly91cFxuXHRcdFx0XHQgICAkb3V0cHV0LnJlbW92ZUNsYXNzKCd0by1sZWZ0IHRvLXJpZ2h0IHRvLWRvd24nKTtcblx0XHRcdFx0ICAgJG91dHB1dC5hZGRDbGFzcygndG8tdXAnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSAmJiBkZWx0YVkgPCAwKSB7XG5cdFx0XHRcdFx0Ly9kb3duXG5cdFx0XHRcdFx0JG91dHB1dC5yZW1vdmVDbGFzcygndG8tbGVmdCB0by1yaWdodCB0by11cCcpO1xuXHRcdFx0XHRcdCRvdXRwdXQuYWRkQ2xhc3MoJ3RvLWRvd24nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJG91dHB1dC5jaGlsZHJlbigpLmxlbmd0aD4gMTApIHtcblx0XHRcdFx0XHQvLyAkb3V0cHV0LmNoaWxkcmVuKCkuZXEoMCkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxhc3RfcG9zaXRpb24gPSB7XG5cdFx0XHRcdHggOiBldmVudC5jbGllbnRYLFxuXHRcdFx0XHR5IDogZXZlbnQuY2xpZW50WVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufSkoKTsiLCIvLy0tLS0tIE1vYmlsZSBmb290ZXIgYWNjb3JkaW9uIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCl7XG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXHRcdCQoJy5mb290ZXJfX2NvbC10aXRsZScpLm9uKHRhcCwgZnVuY3Rpb24oKXtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRjb250ZW50ID0gJHRoaXMubmV4dCgpLFxuXHRcdFx0XHRcdHNpYmxUaXRsZSA9ICR0aGlzLmNsb3Nlc3QoJy5mb290ZXJfX2NvbCcpLnNpYmxpbmdzKCkuZmluZCgnLmZvb3Rlcl9fY29sLXRpdGxlJyksXG5cdFx0XHRcdFx0c2libENvbnRlbnQgPSAkdGhpcy5jbG9zZXN0KCcuZm9vdGVyX19jb2wnKS5zaWJsaW5ncygpLmZpbmQoJy5mb290ZXJfX2NvbC1saXN0Jyk7XG5cdFx0XHRcblx0XHRcdHNpYmxUaXRsZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRzaWJsQ29udGVudC5zbGlkZVVwKCk7XG5cblx0XHRcdCR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcblx0XHR9KTtcblx0fVxuXG59KSgpOyIsIi8vLS0tLS0gUHJpY2UgcGFnZSBtb2JpbGUgdmVyc2lvbiB0b2dnbGUgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0JCgnLnByaWNlLWhlYWRlcl9fbW9iaWxlLXRvZ2dsZScpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcHRpb25dJyxmdW5jdGlvbigpe1xuXHRcdFx0XG5cdFx0XHR2YXIgc2VsZiA9ICQodGhpcyksXG5cdFx0XHRcdFx0aW5kZXggPSBzZWxmLmluZGV4KCksXG5cdFx0XHRcdFx0c2VydmljZXMgPSAkKCcuc2VydmljZXNfX2NvbnRlbnRfcHJpY2UtcGFnZScpLFxuXHRcdFx0XHRcdHByaWNlU2lkZWJhciA9ICQoJy5zZXJ2aWNlc19fc2lkZWJhcl9ieS1wcm9ibGVtJyk7XG5cblx0XHRcdFx0XHRpZihpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2VydmljZXMuZmFkZUluKDE1MClcblx0XHRcdFx0XHRcdHByaWNlU2lkZWJhci5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYoaW5kZXggPT09IDIpIHtcblx0XHRcdFx0XHRcdHByaWNlU2lkZWJhci5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0c2VydmljZXMuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcbn0pKCk7IiwiLy8tLS0tLSBDYXRhbG9nIE1lbnUgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0JCgnLmNhdC1tbWVudV9fYnV0dG9uJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuY2F0LW1tZW51JyksXG5cdFx0XHRcdG5hdiA9ICQoJy5jYXQtbW1lbnVfX25hdicpO1xuXG5cdFx0XG5cdFx0XHRcdG5hdi5zbGlkZVRvZ2dsZSgnZmFzdCcsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRwYXJlbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9KTtcblx0fSk7XG5cblx0JCgnLmNhdGFsb2dfX2ZpbHRlci1zZWxlY3RlZCcpLm9uKHRhcCwgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0cGFyZW50ID0gJHRoaXMuY2xvc2VzdCgnLmNhdGFsb2dfX2ZpbHRlcicpLFxuXHRcdFx0XHRzdWJsaXN0ID0gJCgnLmNhdGFsb2dfX3N1Ymxpc3QnKTtcblxuXHRcdFxuXHRcdFx0XHRzdWJsaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0cGFyZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLndyYXBwZXInLCBmdW5jdGlvbihlKSB7XG5cdFx0ICAgIGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXRhbG9nX19maWx0ZXItc2VsZWN0ZWQnKS5sZW5ndGggPT0gMCkge1xuXHRcdCAgICAgICAgc3VibGlzdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0ICAgICAgIFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQgICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2sud3JhcHBlcicpO1xuXHRcdCAgICB9XG5cdFx0fSk7XG5cdH0pO1xufSkoKTsiLCIvL0l0ZW0gcGFnZSB0aXRsZSBjbG9uaW5nXG4oZnVuY3Rpb24oKSB7XG5cblx0Ly8gaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjgwcHgpJykubWF0Y2hlcykge1xuXHRcdFx0JCgnLml0ZW0taW5mb19fdGl0bGUtdGV4dCcpXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5hcHBlbmRUbygnLml0ZW0taW5mb19fZGVzY3ItdGl0bGUnKTtcblx0Ly8gfVxuXG59KSgpOyIsIlxuXG4vKi0tLS0tLS0tLVBvcHVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLy9JbmZvLXBhZ2UgZ2FsbGVyeVxuXG4oZnVuY3Rpb24oKXtcblxuJCgnLmluZm8tcF9fZ2FsbGVyeS13cmFwcGVyJykubWFnbmlmaWNQb3B1cCh7XG5cdGRlbGVnYXRlOiAnYScsXG5cdHR5cGU6ICdpbWFnZScsXG5cdHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcblx0bWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuXHRnYWxsZXJ5OiB7XG5cdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG5cdFx0cHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2Vcblx0fSxcbi8vIGltYWdlOiB7XG4vLyAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4vLyAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4vLyAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4vLyAgIH1cbi8vIH1cbn0pO1xuXG59KSgpO1xuXG5cblxuIiwiLy8tLS0tLSBGZWVkYmFja3MgbGVuZ3RoIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCl7XG5cdHZhciBzaG93Q2hhciA9IDM3MDtcblx0dmFyIGVsbGlwc2VzdGV4dCA9IFwiXCI7XG5cdHZhciBtb3JldGV4dCA9IFwi0YDQsNGB0LrRgNGL0YLRjCDQvtGC0LfRi9CyXCI7XG5cdHZhciBsZXNzdGV4dCA9IFwi0YHQutGA0YvRgtGMINC+0YLQt9GL0LJcIjtcblx0JCgnLmZlZWRiYWNrX19jb250ZW50X3RleHQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XG5cdFx0XHRpZiAoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xuXHRcdFx0XHRcdHZhciBzaG93X2NvbnRlbnQgPSBjb250ZW50LnN1YnN0cigwLCBzaG93Q2hhcik7XG5cdFx0XHRcdFx0dmFyIGhpZGVfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8c3BhbiBjbGFzcz1cInZpc2libGUtY29udGVudFwiPicgKyBzaG93X2NvbnRlbnQgKyAnPHNwYW4gY2xhc3M9XCJtb3JlZWxpcHNlc1wiPicgK2VsbGlwc2VzdGV4dCArJzwvc3Bhbj48L3NwYW4+JysgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInJlbWFpbmluZy1jb250ZW50XCI+PHNwYW4gY2xhc3M9XCJyZW1haW5lZC10ZXh0XCI+JyArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRlX2NvbnRlbnQgKyAnPC9zcGFuPjxhIGhyZWY9XCJcIiBjbGFzcz1cIm1vcmVsaW5rXCI+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAnPHNwYW4gY2xhc3M9XCJtb3JlbGlua19fdGV4dFwiPicrbW9yZXRleHQrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAnPC9zcGFuPicgKyAnPHN2ZyBjbGFzcz1cImljb25cIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI1XCI+PHVzZSB4bGluazpocmVmPVwiI2Fycm93LXVwLWRvd24tbW9yZVwiPjwvdXNlPjwvc3ZnPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgJzwvYT48L3NwYW4+Jztcblx0XHRcdFx0XHQkKHRoaXMpLmh0bWwoaHRtbCk7XG5cdFx0XHR9XG5cdH0pO1xuXG5cdCQoXCIubW9yZWxpbmtcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XG5cdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcubW9yZWxpbmtfX3RleHQnKS5kZWxheSgzMDApLmh0bWwobW9yZXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwibGVzc1wiKTtcblx0XHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5tb3JlbGlua19fdGV4dCcpLmRlbGF5KDMwMCkuaHRtbChsZXNzdGV4dCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5maW5kKCcubW9yZWVsaXBzZXMnKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XG5cdFx0XHQkKHRoaXMpLnByZXYoKS50b2dnbGVDbGFzcyhcInNob3dcIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufSkoKTsiXX0=
