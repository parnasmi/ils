// check touch support
if( 'ontouchstart' in window ){ var tap = 'touchstart'; }
else { var tap = 'click'; }

//Indemand tablet version items equilheights

(function(){
	if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1279px)').matches) {
		$('.indemand__item:not(.indemand__item_index-main)').equalHeights();
		$('.indemand__item-title:not(.indemand__item-title_index-main)').equalHeights();
		
		// $('.video__video-col').equalHeights();
	}

	if (window.matchMedia('(max-width: 767px)').matches) {
		// $('.footer__address').equalHeights();
	}

})();



//Videos block "show more videos" button cloning for mobile
(function(){
	$('.video__btn').clone().appendTo('.video__playlist-item_mobile-link');
})();

//HIde youtbe icon
	(function(){
			$('.video').on(tap, '.video__player-item', function(){

				$(this).find(".youtube-player").addClass('hide-icon');
				// console.log('ttt');
			})
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2JpbGUtY2xvbmluZy5qcyIsIm1vYmlsZS1tZW51LmpzIiwibWVudS5qcyIsInNsaWRlcnMuanMiLCJ0aXRsZS5qcyIsImF1ZGlvLmpzIiwiYWJvdXQuanMiLCJmb290ZXIuanMiLCJtb2JpbGUtcHJpY2UtdG9nZ2xlLmpzIiwiY2F0YWxvZy1tZW51LmpzIiwiY2xvbmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVjayB0b3VjaCBzdXBwb3J0XG5pZiggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICl7IHZhciB0YXAgPSAndG91Y2hzdGFydCc7IH1cbmVsc2UgeyB2YXIgdGFwID0gJ2NsaWNrJzsgfVxuXG4vL0luZGVtYW5kIHRhYmxldCB2ZXJzaW9uIGl0ZW1zIGVxdWlsaGVpZ2h0c1xuXG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKS5tYXRjaGVzICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjc5cHgpJykubWF0Y2hlcykge1xuXHRcdCQoJy5pbmRlbWFuZF9faXRlbTpub3QoLmluZGVtYW5kX19pdGVtX2luZGV4LW1haW4pJykuZXF1YWxIZWlnaHRzKCk7XG5cdFx0JCgnLmluZGVtYW5kX19pdGVtLXRpdGxlOm5vdCguaW5kZW1hbmRfX2l0ZW0tdGl0bGVfaW5kZXgtbWFpbiknKS5lcXVhbEhlaWdodHMoKTtcblx0XHRcblx0XHQvLyAkKCcudmlkZW9fX3ZpZGVvLWNvbCcpLmVxdWFsSGVpZ2h0cygpO1xuXHR9XG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0Ly8gJCgnLmZvb3Rlcl9fYWRkcmVzcycpLmVxdWFsSGVpZ2h0cygpO1xuXHR9XG5cbn0pKCk7XG5cblxuXG4vL1ZpZGVvcyBibG9jayBcInNob3cgbW9yZSB2aWRlb3NcIiBidXR0b24gY2xvbmluZyBmb3IgbW9iaWxlXG4oZnVuY3Rpb24oKXtcblx0JCgnLnZpZGVvX19idG4nKS5jbG9uZSgpLmFwcGVuZFRvKCcudmlkZW9fX3BsYXlsaXN0LWl0ZW1fbW9iaWxlLWxpbmsnKTtcbn0pKCk7XG5cbi8vSElkZSB5b3V0YmUgaWNvblxuXHQoZnVuY3Rpb24oKXtcblx0XHRcdCQoJy52aWRlbycpLm9uKHRhcCwgJy52aWRlb19fcGxheWVyLWl0ZW0nLCBmdW5jdGlvbigpe1xuXG5cdFx0XHRcdCQodGhpcykuZmluZChcIi55b3V0dWJlLXBsYXllclwiKS5hZGRDbGFzcygnaGlkZS1pY29uJyk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0dHQnKTtcblx0XHRcdH0pXG5cdH0pKCk7XG4iLCJcbi8vLS0tLS0gQ2xvbmluZyBzb21lIGhlYWRlciBibG9ja3MgZm9yIGFkYXB0aXZlIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKGZ1bmN0aW9uKCkge1xuXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xuXG5cdFx0JCgnLmxvZ28nKS5jbG9uZSgpLmFwcGVuZFRvKCcudG9wLWJhcl9fbW9iLWxvZ28nKTtcblx0XHQkKCcudGVsJykuY2xvbmUoKS5hcHBlbmRUbygnLnRvcC1iYXJfX21vYi10ZWwtYnRuJyk7XG5cdFx0JCgnLnRvcC1iYXJfX3dyYXBwZXInKS5jbG9uZSgpLmFwcGVuZFRvKCcubWlkLWJhcl9fbW9iLXNlYy1tZW51Jyk7XG5cdFx0JCgnLmNhdGFsb2dfX21lbnUtbGlzdCcpLmNsb25lKCkuYXBwZW5kVG8oJy5jYXQtbW1lbnVfX25hdicpO1xuXHR9XG5cdC8vQ2xvbmluZyB0aXRsZSBmb3IgcHJvdmlkaW5nIHRhcCBvbiB3aG9sZSBibG9ja1xuXHQkKCcuc2VsZWN0X19pdGVtLWNvbCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgJHRoaXMgICAgID0gJCh0aGlzKTtcblx0XHRcdFx0dGhpc1RpdGxlID0gJHRoaXMuZmluZCgnLnNlbGVjdF9faXRlbS10aXRsZScpLFxuXHRcdFx0XHR0aGlzTGluayAgPSAkdGhpcy5maW5kKCcuc2VsZWN0X19tb2JpbGUtbGluaycpO1xuXG5cdFx0dGhpc1RpdGxlLmNsb25lKCkuYXBwZW5kVG8odGhpc0xpbmspO1xuXHR9KTtcblxuXHQvL0l0ZW0gcGFnZSBwcmljZSBjbG9uaW5nXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcblx0XHRcdCQoJy5pdGVtLWluZm9fX3ByaWNlLXdyYXBwZXInKVxuXHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHQuYXBwZW5kVG8oJy5pdGVtLXNsaWRlcl9fcHJpY2UnKTtcblx0fVxuXG59KSgpOyIsIlxuLy8tLS0tLSBNb2JpbGUgbWVudSBzY3JpcHRpbmcgLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKSB7XG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cblx0XHQvL1RvZ2dsaW5nIGhlYWRlciBpY29ucyBzdGF0ZSB0b2dnbGVcblx0XHQkKCcudG9wLWJhcl9faGFtYnVyZ2VyLCAudG9wLWJhcl9fbW9iLWRldmljZS1idG4nKS5vbih0YXAsIGZ1bmN0aW9uKCl7XG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0aWYoJCgnLm1lbnVfX3N1Ym1lbnUnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcblx0XHRcdFx0JCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcblx0XHRcdH1cblxuXHRcdFx0aWYoJCgnLnNsaWRlLXRvZ2dsZSBmaWVsZHNldCcpLmxlbmd0aCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCgnLnNsaWRlLXRvZ2dsZSBmaWVsZHNldCcpLnJlbW92ZSgpO1xuXHRcdFx0XHR9LDEwMDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly9Ub3Agc2Vjb25kYXJ5IG1lbnVcblx0XHQkKCcudG9wLWJhcl9faGFtYnVyZ2VyJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRoYW1idXJNZW51ID0gJCgnLm1pZC1iYXInKTtcblxuXHRcdFx0aGFtYnVyTWVudS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG5cdFx0fSk7XG5cblx0XHQvL0RldmljZSBtZW51XG5cdFx0JCgnLnRvcC1iYXJfX21vYi1kZXZpY2UtYnRuJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0JCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcblx0XHR9KTtcblxuXHRcdC8vRGV2aWNlIG1lbnUgbW9kZWwgc2VsZWN0aW5nXG5cblx0XHQkKCcubWVudV9faXRlbS1saW5rJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHR0aGlzU3VibWVudSA9ICR0aGlzLm5leHQoKVxuXHRcdFx0XHRcdC5maW5kKCcuc2xpZGUtdG9nZ2xlJyk7XG5cdFx0XHQvLyBcdFx0cHJldkFsbCA9ICR0aGlzLmNsb3Nlc3QoJy5tZW51X19pdGVtJykucHJldkFsbCgpO1xuXG5cdFx0XHQkdGhpcy5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpc1N1Ym1lbnUuaHRtbChcblx0XHRcdFx0JzxmaWVsZHNldD4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3dpdGNoLXRvZ2dsZSBzd2l0Y2gtaW9zXCI+Jytcblx0XHRcdFx0XHRcdCc8aW5wdXQgaWQ9XCJtb2RlbHNcIiBuYW1lPVwib3B0aW9uXCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD1cIlwiIHZhbHVlPVwibW9kZWxzXCI+Jytcblx0XHRcdFx0XHRcdCc8bGFiZWwgZm9yPVwibW9kZWxzXCIgb25jbGljaz1cIlwiPtCc0L7QtNC10LvQuDwvbGFiZWw+Jytcblx0XHRcdFx0XHRcdCc8aW5wdXQgaWQ9XCJzZXJ2aWNlXCIgbmFtZT1cIm9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwic2VydmljZXNcIj4nK1xuXHRcdFx0XHRcdFx0JzxsYWJlbCBmb3I9XCJzZXJ2aWNlXCIgb25jbGljaz1cIlwiPtCj0YHQu9GD0LPQuDwvbGFiZWw+Jytcblx0XHRcdFx0XHRcdCc8YT48L2E+Jytcblx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0JzwvZmllbGRzZXQ+J1xuXHRcdFx0KTtcblx0XHRcdC8vIHByZXZBbGwuaGlkZSgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fSk7XG5cblx0XHQvL0Nsb3NlIG1vZGVscyBzZWN0aW9uXG5cdFx0JCgnLm1lbnVfX3N1Ym1lbnUtbW9iaWxlLXRpdGxlJykub24odGFwLGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdHRoaXNUb2dnbGUgPSAkdGhpcy5uZXh0KCkuZmluZCgnZmllbGRzZXQnKTtcblxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcubWVudV9fc3VibWVudScpXG5cdFx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXNUb2dnbGUucmVtb3ZlKCk7XG5cdFx0XHR9LCA1MDApXG5cdFx0fSk7XG5cdFx0Ly9TbGlkZSB0b2dnbGVcblx0XHQkKCcuc2xpZGUtdG9nZ2xlJykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9wdGlvbl0nLGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBzZWxmID0gJCh0aGlzKSxcblx0XHRcdFx0XHRpbmRleCA9IHNlbGYuaW5kZXgoKSxcblx0XHRcdFx0XHRtb2RlbHMgPSAkKCcubWVudV9fc3VibWVudS1zZWN0aW9uX21vZGVscycpLFxuXHRcdFx0XHRcdHNlcnZpY2VzID0gJCgnLm1lbnVfX3N1Ym1lbnUtc2VjdGlvbl9zZXJ2aWNlcycpO1xuXG5cdFx0XHRcdFx0aWYoaW5kZXggPT09IDApIHtcblx0XHRcdFx0XHRcdG1vZGVscy5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0LnNpYmxpbmdzKCcubWVudV9fc3VibWVudS1zZWN0aW9uJylcblx0XHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYoaW5kZXggPT09IDIpIHtcblx0XHRcdFx0XHRcdHNlcnZpY2VzLmZhZGVJbigxNTApXG5cdFx0XHRcdFx0XHQuc2libGluZ3MoJy5tZW51X19zdWJtZW51LXNlY3Rpb24nKVxuXHRcdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0fSk7XG5cblx0fS8vaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKVxuXG59KSgpO1xuXG5cblxuXG5cbiIsIi8vLS0tLS0gTWVudSBob3ZlciB3aGl0ZSBiYWNrZ3JvdW5kIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbigpe1xuXHQkKCcubWVudV9faXRlbScpLmhvdmVyKGZ1bmN0aW9uKCl7XG5cdFx0JCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdvbi1ob3ZlcicpO1xuXHR9LDIwMCk7XG59KSgpOyIsIi8vLS0tLS0gTWFpbiBzY3JlZW4gc2xpZGVyIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTWFpbi1zY3JlZW4gYmFubmVyIHNsaWRlclxuLy8gJCgnLm1haW4tYmFubmVyX193cmFwcGVyJykuZmxpY2tpdHkoe1xuLy8gICAvLyBvcHRpb25zXG4vLyAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuLy8gICBjb250YWluOiB0cnVlXG4vLyB9KTtcblxuKGZ1bmN0aW9uKCl7XG5cdC8vVmlkZW9zIGJsb2NrIHNsaWRlclxuXHQkKCcudmlkZW9fX3BsYXllcl9qcycpLmZsaWNraXR5KHtcblx0XHQvLyAvLyBvcHRpb25zXG5cdFx0Ly8gY2VsbEFsaWduOiAnbGVmdCcsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRzZXRHYWxsZXJ5U2l6ZTogZmFsc2UsXG5cdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcblx0fSk7XG5cblx0JCgnLnZpZGVvX19wbGF5bGlzdC1saXN0X2pzJykuZmxpY2tpdHkoe1xuXHRcdFx0YXNOYXZGb3I6ICcudmlkZW9fX3BsYXllcl9qcycsXG5cdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcblx0XHRcdHBhZ2VEb3RzOiBmYWxzZVxuXHR9KTtcblxuXHQvLyBJbmRleCBpdGVtc1xuXHQkKCcuaW5kZXgtaXRlbXNfX3dyYXBwZXJfanMnKS5mbGlja2l0eSh7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdGNvbnRhaW46IHRydWUsXG5cdFx0cGFnZURvdHM6IGZhbHNlLFxuXHRcdGdyb3VwQ2VsbHM6IHRydWUsXG5cdFx0Ly8gZnJpY3Rpb246IDAuMTUsXG5cdFx0Ly8gc2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjMsXG5cdFx0c2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjE1LFxuXHRcdGZyaWN0aW9uOiAwLjhcblx0fSk7XG5cdFxuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHRpZigkKCcuYnJlYWRjcnVtYnNfX2xpc3QnKS5sZW5ndGgpIHtcblx0XHRcdCQoJy5icmVhZGNydW1ic19fbGlzdCcpLmZsaWNraXR5KHtcblx0XHRcdFx0XHRhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcblx0XHRcdFx0XHRmcmVlU2Nyb2xsOiB0cnVlLFxuXHRcdFx0XHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdFx0cGFnZURvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdFx0XHRcdGNvbnRhaW46IHRydWUsXG5cdFx0XHRcdFx0Ly9zZXRHYWxsZXJ5U2l6ZTogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vVmlkZW9zIGJsb2NrIHNsaWRlclxuXHQkKCcuaXRlbS1zbGlkZXJfX2luaXQnKS5mbGlja2l0eSh7XG5cdFx0Ly8gLy8gb3B0aW9uc1xuXHRcdC8vIGNlbGxBbGlnbjogJ2xlZnQnLFxuXHRcdGNvbnRhaW46IHRydWUsXG5cdFx0c2V0R2FsbGVyeVNpemU6IGZhbHNlLFxuXHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG5cdFx0cGFnZURvdHM6IHRydWVcblx0XHRcblx0fSk7XG5cblx0JCgnLml0ZW0tc2xpZGVyX190aHVtYnMtaW5pdCcpLmZsaWNraXR5KHtcblx0XHRcdGFzTmF2Rm9yOiAnLml0ZW0tc2xpZGVyX19pbml0Jyxcblx0XHRcdGNvbnRhaW46IHRydWUsXG5cdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0cGFnZURvdHM6IGZhbHNlXG5cdH0pO1xuXG5cdC8vSW5mby1wYWdlIG1lbnUgbW9iaWxlIHZlcnNpb24gc2xpZGVyXG5cblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0aWYoJCgnLmluZm8tcF9fbWVudS1saXN0JykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuaW5mby1wX19tZW51LWxpc3QnKS5mbGlja2l0eSh7XG5cdFx0XHRcdFx0YWNjZXNzaWJpbGl0eTogZmFsc2UsXG5cdFx0XHRcdFx0ZnJlZVNjcm9sbDogdHJ1ZSxcblx0XHRcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0Jyxcblx0XHRcdFx0XHRjb250YWluOiB0cnVlLFxuXHRcdFx0XHRcdC8vc2V0R2FsbGVyeVNpemU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0XG59KSgpOyIsIlxuLy9EZXZpZGluZyB0aXRsZSBhbmQgb3RoZXIgdGV4dHMgaW50byBzZXBhcmF0ZSB0YWdzXG5cblxuXHQoZnVuY3Rpb24oKXtcblxuXHRcdCQoJy5hY2NlbnRlZC1zZXJ2aWNlc19faXRlbS10aXRsZSwgLnNob3AtYmFubmVyX190aXRsZScpLmh0bWwoZnVuY3Rpb24gKGksIGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UoLyhcXFMrKS8sICc8c3Bhbj4kMTwvc3Bhbj4nKX0pO1xuXG5cdFx0JCgnLnNlY3Rpb24taGVhZF9fdGl0bGVfZmVlZGJhY2tzJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspLywgJzxzcGFuPiQxPC9zcGFuPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX19idG5fYWxsLWZkYnMnKS5odG1sKGZ1bmN0aW9uIChpLCBodG1sKSB7XG5cdFx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTKykvLCAnPHNwYW4+JDE8L3NwYW4+Jyl9KTtcblxuXHRcdCQoJy5zZWN0aW9uLWhlYWRfX3RpdGxlX3ZpZGVvJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdFx0cmV0dXJuIGh0bWwucmVwbGFjZSgvKFxcUyspXFxzKiQvLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpfSk7XG5cblx0XHQkKCcuc2VjdGlvbi1oZWFkX190aXRsZV9zaG9wLWl0ZW1zJykuaHRtbChmdW5jdGlvbiAoaSwgaHRtbCkge1xuXHRcdCAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8oXFxTK1xcc1xcUytcXHNcXFMrKVxccyokLywgJzxzdHJvbmc+JDE8L3N0cm9uZz48YnIvPicpXG5cdFx0fSlcblx0fSkoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIlxuXG4vKi0tLS0tLS0tLUZlZWRiYWNrcyBhdWRpb3BsYXllclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuKGZ1bmN0aW9uKCl7XG5cdCQoJy5wbGF5ZXInKS5tZWRpYWVsZW1lbnRwbGF5ZXIoe1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lZGlhRWxlbWVudCwgb3JpZ2luYWxOb2RlKSB7XG5cdFx0XHRcdFxuXHRcdH0sXG5cdFx0c3RyZXRjaGluZzogJ3Jlc3BvbnNpdmUnLFxuXHRcdHN0YXJ0Vm9sdW1lOjEsXG5cdFx0Ly8gYXVkaW9Wb2x1bWU6ICd2ZXJ0aWNhbCcsXG5cdFx0ZGVmYXVsdEF1ZGlvSGVpZ2h0OiAzMFxuXHRcdC8vIGhpZGVWb2x1bWVPblRvdWNoRGV2aWNlczogZmFsc2Vcbn0pO1xufSkoKTtcblxuXG4iLCIvLy0tLS0tIEFib3V0IHNlY3Rpb24gbW91c2Vtb3ZlIC0tLS0tXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxhc3RfcG9zaXRpb24gPSB7fSxcbiAgICAkb3V0cHV0ICAgICAgID0gJCgnLmFib3V0X19sb2dvLWNpcmNsZS1zaGFkb3dzJyksXG4gICAgbW91c2Vtb3ZlX29rICA9IHRydWUsXG4gICAgbW91c2VfdGltZXIgICA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2Vtb3ZlX29rID0gdHJ1ZTtcbiAgICB9LCA1MDApLFxuICAgIGNvdW50ICAgICAgICAgPSAxO1xuJChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChtb3VzZW1vdmVfb2spIHtcbiAgICAgICAgbW91c2Vtb3ZlX29rID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YobGFzdF9wb3NpdGlvbi54KSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGRlbHRhWCA9IGxhc3RfcG9zaXRpb24ueCAtIGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgZGVsdGFZID0gbGFzdF9wb3NpdGlvbi55IC0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gTWF0aC5hYnMoZGVsdGFZKSAmJiBkZWx0YVggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0XG4gICAgICAgICAgICAgICAgJG91dHB1dC5yZW1vdmVDbGFzcygndG8tcmlnaHQgdG8tdXAgdG8tZG93bicpO1xuICAgICAgICAgICAgICAgICRvdXRwdXQuYWRkQ2xhc3MoJ3RvLWxlZnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IE1hdGguYWJzKGRlbHRhWSkgJiYgZGVsdGFYIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vcmlnaHRcbiAgICAgICAgICAgICAgICAkb3V0cHV0LnJlbW92ZUNsYXNzKCd0by1sZWZ0IHRvLXVwIHRvLWRvd24nKTtcbiAgICAgICAgICAgICAgICAkb3V0cHV0LmFkZENsYXNzKCd0by1yaWdodCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSAmJiBkZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgICAgJG91dHB1dC5yZW1vdmVDbGFzcygndG8tbGVmdCB0by1yaWdodCB0by1kb3duJyk7XG4gICAgICAgICAgICAgICAkb3V0cHV0LmFkZENsYXNzKCd0by11cCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSAmJiBkZWx0YVkgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy9kb3duXG4gICAgICAgICAgICAgICAgJG91dHB1dC5yZW1vdmVDbGFzcygndG8tbGVmdCB0by1yaWdodCB0by11cCcpO1xuICAgICAgICAgICAgICAgICRvdXRwdXQuYWRkQ2xhc3MoJ3RvLWRvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkb3V0cHV0LmNoaWxkcmVuKCkubGVuZ3RoPiAxMCkge1xuICAgICAgICAgICAgICAgIC8vICRvdXRwdXQuY2hpbGRyZW4oKS5lcSgwKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0X3Bvc2l0aW9uID0ge1xuICAgICAgICAgICAgeCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICB5IDogZXZlbnQuY2xpZW50WVxuICAgICAgICB9O1xuICAgIH1cbn0pOyIsIi8vLS0tLS0gTW9iaWxlIGZvb3RlciBhY2NvcmRpb24gLS0tLS1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4oZnVuY3Rpb24oKXtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG5cdFx0JCgnLmZvb3Rlcl9fY29sLXRpdGxlJykub24odGFwLCBmdW5jdGlvbigpe1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdGNvbnRlbnQgPSAkdGhpcy5uZXh0KCksXG5cdFx0XHRcdFx0c2libFRpdGxlID0gJHRoaXMuY2xvc2VzdCgnLmZvb3Rlcl9fY29sJykuc2libGluZ3MoKS5maW5kKCcuZm9vdGVyX19jb2wtdGl0bGUnKSxcblx0XHRcdFx0XHRzaWJsQ29udGVudCA9ICR0aGlzLmNsb3Nlc3QoJy5mb290ZXJfX2NvbCcpLnNpYmxpbmdzKCkuZmluZCgnLmZvb3Rlcl9fY29sLWxpc3QnKTtcblx0XHRcdFxuXHRcdFx0c2libFRpdGxlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHNpYmxDb250ZW50LnNsaWRlVXAoKTtcblxuXHRcdFx0JHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0Y29udGVudC5zbGlkZVRvZ2dsZSgpO1xuXHRcdH0pO1xuXHR9XG5cbn0pKCk7IiwiLy8tLS0tLSBQcmljZSBwYWdlIG1vYmlsZSB2ZXJzaW9uIHRvZ2dsZSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpe1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcblx0XHQkKCcucHJpY2UtaGVhZGVyX19tb2JpbGUtdG9nZ2xlJykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9wdGlvbl0nLGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBzZWxmID0gJCh0aGlzKSxcblx0XHRcdFx0XHRpbmRleCA9IHNlbGYuaW5kZXgoKSxcblx0XHRcdFx0XHRzZXJ2aWNlcyA9ICQoJy5zZXJ2aWNlc19fY29udGVudF9wcmljZS1wYWdlJyksXG5cdFx0XHRcdFx0cHJpY2VTaWRlYmFyID0gJCgnLnNlcnZpY2VzX19zaWRlYmFyX2J5LXByb2JsZW0nKTtcblxuXHRcdFx0XHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5mYWRlSW4oMTUwKVxuXHRcdFx0XHRcdFx0cHJpY2VTaWRlYmFyLmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZihpbmRleCA9PT0gMikge1xuXHRcdFx0XHRcdFx0cHJpY2VTaWRlYmFyLmZhZGVJbigxNTApXG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxufSkoKTsiLCIvLy0tLS0tIENhdGFsb2cgTWVudSAtLS0tLVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbihmdW5jdGlvbigpe1xuXHQkKCcuY2F0LW1tZW51X19idXR0b24nKS5vbih0YXAsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdHBhcmVudCA9ICR0aGlzLmNsb3Nlc3QoJy5jYXRhbG9nX19maWx0ZXInKSxcblx0XHRcdFx0bmF2ID0gJCgnLmNhdC1tbWVudV9fbmF2Jyk7XG5cblx0XHRcblx0XHRcdFx0bmF2LnNsaWRlVG9nZ2xlKCdmYXN0JyxmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHBhcmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH0pO1xuXHR9KTtcblxuXHQkKCcuY2F0YWxvZ19fZmlsdGVyLXNlbGVjdGVkJykub24odGFwLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuY2F0YWxvZ19fZmlsdGVyJyksXG5cdFx0XHRcdHN1Ymxpc3QgPSAkKCcuY2F0YWxvZ19fc3VibGlzdCcpO1xuXG5cdFx0XG5cdFx0XHRcdHN1Ymxpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRwYXJlbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0JChkb2N1bWVudCkuYmluZCgnY2xpY2sud3JhcHBlcicsIGZ1bmN0aW9uKGUpIHtcblx0XHQgICAgaWYoJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhdGFsb2dfX2ZpbHRlci1zZWxlY3RlZCcpLmxlbmd0aCA9PSAwKSB7XG5cdFx0ICAgICAgICBzdWJsaXN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQgICAgICAgXHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay53cmFwcGVyJyk7XG5cdFx0ICAgIH1cblx0XHR9KTtcblx0fSk7XG59KSgpOyIsIi8vSXRlbSBwYWdlIHRpdGxlIGNsb25pbmdcbihmdW5jdGlvbigpIHtcblxuXHQvLyBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyODBweCknKS5tYXRjaGVzKSB7XG5cdFx0XHQkKCcuaXRlbS1pbmZvX190aXRsZS10ZXh0Jylcblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmFwcGVuZFRvKCcuaXRlbS1pbmZvX19kZXNjci10aXRsZScpO1xuXHQvLyB9XG5cbn0pKCk7Il19
