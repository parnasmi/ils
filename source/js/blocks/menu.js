//----- Menu hover white background -----
//====================================================
(function(){
	if (window.matchMedia('(min-width: 1280px)').matches) {
		$('.menu__item').hover(function(){
			$('.nav').toggleClass('on-hover');
		},100);
	}
})();

