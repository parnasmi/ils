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
