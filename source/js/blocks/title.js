
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
		
		$('.fdb-loc__title').html(function (i, html) {
			return html.replace(/(\S+)\s*$/, '<strong>$1</strong>')
		});
	})();












