//----- Catalog Menu -----
//====================================================

(function(){
	$('.cat-mmenu__button').on(tap, function(e){
		e.preventDefault();

		var $this = $(this),
				parent = $this.closest('.cat-mmenu'),
				nav = $('.cat-mmenu__nav');

		
				nav.slideToggle('fast',function(){
					parent.toggleClass('active');
				});
	});

	$('.catalog__filter-selected').on(tap, function(e){
		e.preventDefault();

		var $this = $(this),
				parent = $this.closest('.catalog__filter'),
				sublist = $('.catalog__sublist');

		
				sublist.toggleClass('active');
				parent.toggleClass('active');

		$(document).bind('click.wrapper', function(e) {
		    if($(e.target).closest('.catalog__filter-selected').length == 0) {
		        sublist.removeClass('active');
		       	parent.removeClass('active');
		        $(document).unbind('click.wrapper');
		    }
		});
	});
})();