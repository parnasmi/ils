

/*---------Feedbacks audioplayer
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


