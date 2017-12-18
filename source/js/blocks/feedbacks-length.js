//----- Feedbacks length -----
//====================================================

(function(){
	var showChar = 370;
	var ellipsestext = "";
	var moretext = "раскрыть отзыв";
	var lesstext = "скрыть отзыв";
	$('.feedback__content_text').each(function () {
			var content = $(this).html();
			if (content.length > showChar) {
					var show_content = content.substr(0, showChar);
					var hide_content = content.substr(showChar, content.length - showChar);
					var html = '<span class="visible-content">' + show_content + '<span class="moreelipses">' +ellipsestext +'</span></span>'+ 
										'<span class="remaining-content"><span class="remained-text">' + 
										hide_content + '</span><a href="" class="morelink">' +
										 '<span class="morelink__text">'+moretext+
										 '</span>' + '<svg class="icon" width="7" height="5"><use xlink:href="#arrow-up-down-more"></use></svg>' +
										 '</a></span>';
					$(this).html(html);
			}
	});

	$(".morelink").click(function () {
			if ($(this).hasClass("less")) {
					$(this).removeClass("less");
					$(this).find('.morelink__text').html(moretext);
			} else {
					$(this).addClass("less");
					$(this).find('.morelink__text').html(lesstext);
			}
			$(this).parent().prev().find('.moreelipses').toggle();
			$(this).prev().toggle();
			return false;
	});
})();