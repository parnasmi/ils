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