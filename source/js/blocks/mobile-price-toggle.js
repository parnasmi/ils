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