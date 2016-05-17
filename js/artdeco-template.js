$( document ).ready(function() {

	
	showContent('#instruction');
	showContent('#about');
	$(['../images/icons/arrow.png']).preload();

	//show content if element is clicked
	function showContent(id){
		$('body').on('click', id, function(event) {
		    event.preventDefault();
		    var content = this.className || 'show';
	  		$(id + ' .box-outer').toggleClass(content);
		});
	}

	//preloading images
	$.fn.preload = function() {
    	this.each(function(){
        	$('<img/>')[0].src = this;
    	});
	}
	

});