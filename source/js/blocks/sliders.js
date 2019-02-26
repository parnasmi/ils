//----- Main screen slider -----
//====================================================

// Main-screen banner slider
$('.main-banner__wrapper').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround: true
});

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


