// JavaScript Document
(function($,w){
	
	$.fn.viewedByScroll = function(par,callback){
			var selector = this.selector,
			callback = typeof callback == 'function'?callback:function(){},
			currentEl,
			defaults = {indentTop:0},
			f = {
				scroll:function(e){
					$(selector).each(function(i,el) {
						if(el.offsetTop <= window.scrollY+defaults.indentTop && window.scrollY+defaults.indentTop <= el.offsetTop+el.clientHeight && currentEl != el){
							currentEl = el;
							callback(i,el);
							return 0;
						}
					});
				},
				settings:function(par){
					if(typeof par == 'object')
						for(var k in par)
							defaults[k] = par[k];
				}
			
			};
			
		//public functions
		$(window).on('scroll',f.scroll);
		this.settings = f.settings;
		
		//execution inside the constructor
		f.settings(par);
		f.scroll();
		return this;
	};

})(jQuery,this);


