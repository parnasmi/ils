//----- About section mousemove -----
//====================================================

(function(){
	var last_position = {},
		$output       = $('.about__logo-circle-shadows'),
		mousemove_ok  = true,
		mouse_timer   = setInterval(function () {
			mousemove_ok = true;
		}, 500),
		count         = 1;
	$(document).on('mousemove', function (event) {
		if (mousemove_ok) {
			mousemove_ok = false;
			if (typeof(last_position.x) != 'undefined') {
				var deltaX = last_position.x - event.clientX,
					deltaY = last_position.y - event.clientY;
				if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
					//left
					$output.removeClass('to-right to-up to-down');
					$output.addClass('to-left');
				} else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
					//right
					$output.removeClass('to-left to-up to-down');
					$output.addClass('to-right');
				} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
					//up
				   $output.removeClass('to-left to-right to-down');
				   $output.addClass('to-up');
				} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
					//down
					$output.removeClass('to-left to-right to-up');
					$output.addClass('to-down');
				}
				if ($output.children().length> 10) {
					// $output.children().eq(0).remove();
				}
			}
			last_position = {
				x : event.clientX,
				y : event.clientY
			};
		}
	});
})();