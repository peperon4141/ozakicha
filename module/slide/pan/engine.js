bd.slide.Pan = function() {
	this.init.apply(this, arguments);
};

bd.slide.Pan.prototype = {
	isReady: false,
	
	init: function() {
		bd.util.addCss(bindobj.moduleroot + '/slide/_common/bdSlidePan/jquery.bdSlidePan.css');
		head.load(bindobj.moduleroot + '/slide/_common/bdSlidePan/jquery.bdSlidePan.js', jQuery.fnbind(this, this.callback));
	},
	
	callback: function() {
		this.isReady = true;
	},
	
	render: function( elem, autost, loop, interval, duration ) {
		jQuery(elem).bdSlidePan({'autostart':autost, 'loop':loop, 'interval':interval, 'duration':duration});
	}
};
