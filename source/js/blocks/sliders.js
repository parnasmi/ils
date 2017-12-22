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