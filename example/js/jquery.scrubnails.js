/**
 * Scrubnails
 * Author: Chris Johnson (me@cmj.io / http://explore.js)
 * Version: 1.0
 * Dependencies: jQuery
 */

(function($) {
$.fn.Scrubnails = function(options) {

	if (!this.length) { return this; }
	var opts = $.extend(true, {}, $.fn.Scrubnails.defaults, options);

	this.each(function() {
		var $this = $(this);

		// build images
		for(var i = 0; i < opts.images.length; i++){
			var itemImages = opts.images[i].images;
			var li = $('<li/>').addClass('nail').attr('id','nail_'+i);
			$this.append(li);

			var overlay = $('<div/>').addClass('overlay');
			li.append(overlay);

			for(var j = 0; j < itemImages.length; j++){
				var img = $('<img/>').addClass('frame').attr('src','/img/'+itemImages[j]).attr('width','170').css({ display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 1000 }).hide();
				li.append(img);

				li.children('img').eq(0).show();
			}
		}

		$(".nail").mousemove(function(e){
			var self = this;
			var x = (e.pageX - this.offsetLeft);
			var width = $(this).width();
			var imageCount = $(this).children('img').length;
			var step = Math.floor(width / imageCount);
			var max = 0;
			var min = 0;
			var idx = 0;

			loop();

			function loop(){
				if(x >= min && x < max + step){
					$(self).children('img').hide();
					$(self).children('img').eq(idx).show();
				}else{
					$(self).children('img').hide();
					min = max;
					max = max + step;
					idx = idx + 1;
					$(self).children('img').eq(idx).show();
					loop();
				}
			}
		});

		$(".nail").mouseout(function(e){
			$(this).children('img').hide();
			$(this).children('img').eq(0).show();
		});


	});


	return this;
};

// default options
$.fn.Scrubnails.defaults = {
  images: []
};

})(jQuery);
