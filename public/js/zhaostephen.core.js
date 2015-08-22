// JavaScript Document

// does resize on page elements depending on window size
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

// util function to add a 'complete' function for pre-specified animations
var withAddedComplete = function(json, fnc){
	json.complete = fnc;
	return json;
}

// ON DOCUMENT READY
$(function(){
	// have window listen for resize event
	$(window).bind('resize',function() {
		doResize();
	}).trigger('resize');
});