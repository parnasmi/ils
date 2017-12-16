
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