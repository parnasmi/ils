// check touch support
if( 'ontouchstart' in window ){ var tap = 'click'; }
else { var tap = 'click'; }

//Indemand tablet version items equilheights
(function(){
	if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1279px)').matches) {
		$('.indemand__item-title:not(.indemand__item-title_index-main)').equalHeights();
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

//Showing mobile version notification for pointing device menu
//using firstImpression.js
if (window.matchMedia('(max-width: 767px)').matches) {
	if(firstImpression('ils', 2)) {// цифр означает количество дней в течении которых сохраниться куки
		$(window).on('load', function(){
			setTimeout(function(){
				$('.notif').addClass('active');
			},500);
		})
	}

	$('.notif__btn').on(tap, function(){
		$('.notif').removeClass('active');
	});
}

//Remove wrapper if there is no image in device page services
(function(){
	$('.indemand__col_device').each(function(i,v){
		var $this = $(v),
				wrapper = $this.find('.indemand__item-img'),
				img = $(this).find('.indemand__item-img img');

		if(!img.length) {
			wrapper.remove();
			$this.addClass('has-no-image');
		}

	})
	.promise()
	.done(function(){
		if (window.matchMedia('(min-width: 1280px)').matches) {
			$('.indemand__col:not(.has-no-image)').equalHeights();
		}

		if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1279px)').matches) {
			$('.indemand__col_device:not(.has-no-image) .indemand__item:not(.indemand__item_index-main').equalHeights();
		}
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







//----- Menu hover -----
//====================================================
//Menu hover white background

(function(){
	if (window.matchMedia('(min-width: 1280px)').matches) {
		// $('.menu__list').hover(function(){
		// 	$('.nav').toggleClass('on-hover');
		// },100);

		//Menu items hovers with delay
		//******************************************

		var nCurPosY; //// текущее положение курсора

		$('html').mousemove(function(e){
			if(!e) e = window.event;
			nCurPosY = e.clientY;
		});

		$('.menu__item').hover(function(){

			var $curItem = $(this),
				  $submenu = $curItem.find('.menu__submenu');
			if($submenu.length) {
				$curItem.addClass('hover');
			}
			

			// делаем задержку чтобы при случайном наведении на пункт под меню не показывалось

			setTimeout(function(){
				/* если по истечению задержки мы все еще на том же пункт меню,
					значит показываем подменю
				*/
				if($curItem.hasClass('hover')) {
					$submenu.addClass('hover');
					$('.nav').addClass('on-hover');
				}
			},100);

		},

		function(){
			var nPosYStart = nCurPosY,
					$curItem = $(this),
					$submenu = $curItem.find('.menu__submenu');

			$curItem.removeClass('hover');
			/*
					делаем небольшую задержку чтобы определить направление движение курсора
				*/
			setTimeout(function(){

				var nPosYEnd = nCurPosY;

				// если в сторону подменю, значит делаем большую задержку для возможности движения по диагонали
				if(nPosYEnd - nPosYStart > 0 && !$submenu.hasClass('hovered')){

					setTimeout(function() {
						/*
							если по истечению задержки курсор находится на подменю или текущем пункте меню
							тогда не прячем подменю
						*/
						if(!$submenu.hasClass('hovered') && !$curItem.hasClass('hovered')){
							$submenu.removeClass('hover hovered');
							$('.nav').removeClass('on-hover');
						}
					},300);

				}//if(nPosYEnd - nPosYStart > 0){

				// если нет и мы ушли с текущего пункта меню, моментально скрываем подменю
				else if(!$submenu.hasClass('hovered') && !$curItem.hasClass('hover')) {
					$submenu.removeClass('hover hovered');
					$('.nav').removeClass('on-hover');
				}
			},10);
		});//hover function


		$('.menu__submenu').hover(
			function(){
				$(this).addClass('hovered');
			},
			function(){
				$(this).removeClass('hovered');
			}
		);
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
	var $vp = $('.video__player_js'),
			$vpList = $('.video__playlist-list_js');

	$vp.flickity({
		contain: true,
		setGallerySize: false,
		prevNextButtons: false,
		touchVerticalScroll: true,
	});

	$vpList.flickity({
			asNavFor: '.video__player_js',
			contain: true,
			prevNextButtons: false,
			pageDots: false,
			touchVerticalScroll: true
	});

	//Stop playing previous youtube video
	$('.video__playlist-list_js').on('click', '.video__playlist-item', function(){

		var container = $('.video'),
				$this = $(this),
				player = container.find('.video__player'),
				playerItems = player.find('.video__player-item');

			playerItems.each(function(i,v){
				var current = $(v);

				if(!current.hasClass('is-selected') && current.find('iframe').length) {
					var iframe = $(this).find('iframe')[0].contentWindow;
					iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
				}
			});
	});

	var $indexItems = $('.index-items__wrapper_js');
	// Index items
	$indexItems.flickity({
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		groupCells: true,
		selectedAttraction: 0.15,
		friction: 0.8,
		touchVerticalScroll: true
	});

	$indexItems.on( 'change.flickity', function() {
		console.log('changed');
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