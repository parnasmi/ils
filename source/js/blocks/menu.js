//----- Menu hover -----
//====================================================
//Menu hover white background

(function(){
	if (window.matchMedia('(min-width: 1280px)').matches) {
		// $('.menu__list').hover(function(){
		// 	$('.nav').toggleClass('on-hover');
		// },100);

		//Menu items hovers with delay
		//******************************************

		var nCurPosY; //// текущее положение курсора

		$('html').mousemove(function(e){
			if(!e) e = window.event;
			nCurPosY = e.clientY;
		});

		$('.menu__item').hover(function(){

			var $curItem = $(this),
				  $submenu = $curItem.find('.menu__submenu');
			if($submenu.length) {
				$curItem.addClass('hover');
			}
			

			// делаем задержку чтобы при случайном наведении на пункт под меню не показывалось

			setTimeout(function(){
				/* если по истечению задержки мы все еще на том же пункт меню,
					значит показываем подменю
				*/
				if($curItem.hasClass('hover')) {
					$submenu.addClass('hover');
					$('.nav').addClass('on-hover');
				}
			},100);

		},

		function(){
			var nPosYStart = nCurPosY,
					$curItem = $(this),
					$submenu = $curItem.find('.menu__submenu');

			$curItem.removeClass('hover');
			/*
					делаем небольшую задержку чтобы определить направление движение курсора
				*/
			setTimeout(function(){

				var nPosYEnd = nCurPosY;

				// если в сторону подменю, значит делаем большую задержку для возможности движения по диагонали
				if(nPosYEnd - nPosYStart > 0 && !$submenu.hasClass('hovered')){

					setTimeout(function() {
						/*
							если по истечению задержки курсор находится на подменю или текущем пункте меню
							тогда не прячем подменю
						*/
						if(!$submenu.hasClass('hovered') && !$curItem.hasClass('hovered')){
							$submenu.removeClass('hover hovered');
							$('.nav').removeClass('on-hover');
						}
					},300);

				}//if(nPosYEnd - nPosYStart > 0){

				// если нет и мы ушли с текущего пункта меню, моментально скрываем подменю
				else if(!$submenu.hasClass('hovered') && !$curItem.hasClass('hover')) {
					$submenu.removeClass('hover hovered');
					$('.nav').removeClass('on-hover');
				}
			},10);
		});//hover function


		$('.menu__submenu').hover(
			function(){
				$(this).addClass('hovered');
			},
			function(){
				$(this).removeClass('hovered');
			}
		);
	}
})();


