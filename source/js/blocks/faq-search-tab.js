jQuery(document).ready(function($){
	if (window.matchMedia('(min-width: 768px)').matches) {
		$(window).on('load', function(){
			$('.faq__search-input input').attr('placeholder', 'Поиск по ключевым словам');
		})
	}
});