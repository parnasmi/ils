jQuery(document).ready(function($){
	$('.faq-form').on('change','.tel-require .form-uni-input' ,function(){

		$(this).closest('.tel-require').siblings('.tel-input').slideToggle();

	});
});