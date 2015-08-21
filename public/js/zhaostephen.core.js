// JavaScript Document
function doResize() {
	// EDIT FONT SIZE
	var wndWidth = $('html').width();
	var maxWidth = 1920;
	wndWidth = Math.min(wndWidth, maxWidth);
	var fw = wndWidth*(10/maxWidth);
	var fpc = fw*100/16;
	var fpc = Math.round(fpc*100)/100;
	var fpc = Math.max(fpc,25)
	$('html').css('font-size',fpc+'%');
}

$(function(){
	$(window).bind('resize',function() {
		doResize();
	}).trigger('resize');
});