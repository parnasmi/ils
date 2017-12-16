

/*---------Yandex map
============================================*/
(function(){
	$('.player').mediaelementplayer({
		success: function(mediaElement, originalNode) {
				
		},
		stretching: 'responsive',
		startVolume:1,
		// audioVolume: 'vertical',
		defaultAudioHeight: 30
		// hideVolumeOnTouchDevices: false
});
})();

script(src="https://api-maps.yandex.ru/2.1/?lang=ru_RU", type="text/javascript")
script.
	(function(){
		var myMap;
			ymaps.ready(init);
			
			function init () {
				myMap = new ymaps.Map('yamaps', {
					center:[55.76, 37.64], // Москва
					zoom:10,
					controls:[]
				});

				myMap.behaviors.disable('scrollZoom');
			}
		
		
	})();

