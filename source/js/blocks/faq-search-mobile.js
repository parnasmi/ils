jQuery(document).ready(function($){
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('.faq__search-btn').on('click', function(e){
			var $this = $(this);
			if(!$this.is('.active')) {
				e.preventDefault();
				$this.addClass('active');
			}
			
			$('.faq__search')
				// .add('.quick-panel__search-close')
				.addClass('active');
			
			$this.siblings('.faq__search-input').find('input')
				.focus()
				.attr('placeholder', 'Поиск по ключевым словам');

			$('.faq__search-input').prepend('<div class="faq__search-close"></div>');

		});
		$('.faq__search').on('click', '.faq__search-close',function(){
			$('.faq__search')
				.add('.faq__search-btn')
				.removeClass('active');
			$('.faq__search-input input').removeAttr('placeholder');
			$(this).remove();
		});
	}
});