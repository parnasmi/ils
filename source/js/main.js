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

