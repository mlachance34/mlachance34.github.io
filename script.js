$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'work'],
        menu: '#menu'
    });
    $('#next').click(function() {
    	console.log('next');
    	$.fn.fullpage.moveSlideRight();
    });
    $('#prev').click(function() {
    	console.log('prev');
        $.fn.fullpage.moveSlideLeft();
    });
});