// Styling checkboxes and radio
jQuery(document).ready(function($){
	!function(t,s){function i(s,n){var e=this;e.$e=t(s),e.options=t.extend({},i.default,n),e.init()}i.default={stylize_class:"form"},i.prototype.init=function(){var s=this;if(s.$e.hasClass(s.options.stylize_class+"-uni-input"))return!1;s.$e.addClass(s.options.stylize_class+"-uni-input"),s.$p=s.$e.parent(),s.$p.is("label")?s.$p.addClass(s.options.stylize_class+"-label"):(s.$p=t('<label class="'+s.options.stylize_class+'-label"></label>'),s.$e.wrap(s.$p)),s.$e.after('<span class="'+s.options.stylize_class+'-stylized-option"></span>')},t.fn.stylizeInput=function(s){return this.each(function(){t(this).data("stylizeInput")||t(this).data("stylizeInput",new i(this,s))})},t.fn.stylizeInput.Constructor=i}(jQuery);
	
	$('.faq-form input[type=checkbox],.faq-form input[type=radio]').stylizeInput();
});


