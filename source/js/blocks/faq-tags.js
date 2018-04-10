jQuery(document).ready(function($){
	$('.qr__tag-link').on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		var tagText = ' - ' + $this.text();
		var faqTitle = $('.blog__title_faq');

		if(!faqTitle.find('span').length) {
			$('.blog__title_faq').append('<span>' + tagText + '</span>');
		} else {
			$('.blog__title_faq').find('span').remove();
			$('.blog__title_faq').append('<span>' + tagText + '</span>');
		}
		
	});
});