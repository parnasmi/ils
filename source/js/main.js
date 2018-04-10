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

