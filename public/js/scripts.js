// JavaScript Document
// UTIL FUNCTIONS
// adds a 'complete' function for pre-specified animation options
var withAddedComplete = function(anopt, complete){
	anopt.complete = complete;
	return anopt;
}

// adds a 'done' function for pre-specified animation options
var withAddedDone = function(anopt, done){
	anopt.done = done;
	return anopt;
}

// adds a 'fail' function for pre-specified animation options
var withAddedFail = function(anopt, fail){
	anopt.fail = fail;
	return anopt;
}

// rounds to n decimal places
var roundToNth = function(num, n){
	return Math.round(num*n)/n;
}

// does resize on page elements depending on window size
var doResize = function() {
	// EDIT FONT SIZE
	var wndWidth = $('html').width();
	var wndHeight = $('html').height();
	if (wndWidth > wndHeight){
		var maxWidth = 1920;
		wndWidth = Math.min(wndWidth, maxWidth);
		var fw = wndWidth*(10/maxWidth);
		var fpc = roundToNth(fw*100/16, 0.16);
		fpc = Math.max(fpc,25)
	}
	else {
		var maxHeight = 1920;
		wndHeight = Math.min(wndHeight, maxHeight);
		var fw = wndHeight*(10/maxHeight);
		var fpc = roundToNth(fw*100/8, 0.16);
		fpc = Math.max(fpc,25)
	}
	$('html').css('font-size',fpc+'%');
}

// ON DOCUMENT READY
$(function(){
	// have window listen for resize event
	$(window).bind('resize',function() {
		doResize();
	}).trigger('resize');
});
