// JavaScript Document
//==========================================
//         ZHAOSTEPHEN ANIMATIONS 
//==========================================

// GLOBAL VARIABLES
var bHomeMenuVis = false,
	bMouseHoverMenuCircle = false,
	bClickedMenuCircle = false;

// Animation Options Def
var ANOPT_EASEOUT_800 = {duration: 800, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1000 = {duration: 1000, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1500 = {duration: 1500, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEIN_1500 = {duration: 1500, easing: 'easeInExpo', queue: false};

var ANOPT_DEF = ANOPT_EASEOUT_800;

//ANIMATION FUNCTIONS DEF
var homeDirectionHalfPeek = function(direction){
	switch (direction) {
		case 'top':
			$('#bg-img').animate({'top': '10%'},ANOPT_DEF);
			$('#bg-img').animate({'height': '90%'},ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '10%'},ANOPT_DEF);
			break;
			
		case 'bottom':
			$('#bg-img').animate({'bottom': '10%'},ANOPT_DEF);
			$('#bg-img').animate({'height': '90%'},ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '10%'},ANOPT_DEF);
			break;
	
		case 'left':
			$('#bg-img').animate({'left': '20%'},ANOPT_EASEOUT_1000);
			$('#bg-img').animate({'width': '80%'},ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '20%'},ANOPT_EASEOUT_1000);
			break;
			
		case 'right':
			$('#bg-img').animate({'right': '20%'},ANOPT_EASEOUT_1000);
			$('#bg-img').animate({'width': '80%'},ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '20%'},ANOPT_EASEOUT_1000);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().fadeIn(300);
}

var homeDirectionHalfShow = function(direction){
	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	// var animProperties = {};
	// animProperties[direction] = '100%';
	$('#bg-img').stop().animate(JSON.parse('{"'+direction+'" : "100%"}'),ANOPT_EASEOUT_1500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').animate({'height': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).stop().animate({'height': '100%'}, ANOPT_EASEOUT_1500);
			break;
	
		case 'left':
		case 'right':
			$('#bg-img').animate({'width': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).stop().animate({'width': '100%'}, ANOPT_EASEOUT_1500);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
}

var homeDirectionHalfCont = function(direction){
	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	var animProperties = {};
	animProperties[direction] = '100%';
	$('#bg-img').stop().animate(animProperties,ANOPT_EASEIN_1500);

	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').animate({'height': '0'}, ANOPT_EASEIN_1500);
			$('#transitionPanel-'+direction).stop().animate({'height': '100%'}, ANOPT_EASEIN_1500);
			break;
			
		case 'left':
		case 'right':
			$('#bg-img').animate({'width': '0'}, ANOPT_EASEIN_1500);
			$('#transitionPanel-'+direction).stop().animate({'width': '100%'}, ANOPT_EASEIN_1500);
			break;
			
		default:
			console.error('Animation error: Unknown direction');
	}
}

var homeDirectionHalfRevert = function(direction){
	$('#transitionPanel-'+direction).children().stop().fadeOut(500);
	var animProperties = {};
	animProperties[direction] = '0';
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').stop().animate(animProperties,ANOPT_DEF);
			$('#bg-img').animate({'height': '100%'}, ANOPT_DEF);
			$('#transitionPanel-'+direction).stop().animate({'height': '0'}, ANOPT_DEF);
			break;
		
		case 'left':
		case 'right':
			$('#bg-img').stop().animate(animProperties,ANOPT_EASEOUT_1000);
			$('#bg-img').animate({'width': '100%'}, ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).stop().animate({'width': '0'}, ANOPT_EASEOUT_1000);
			break;
		
		default:
			console.error('Animation err: Unknown direction');
	}
}

var homeMenuPeek = function(){
	if (bHomeMenuVis == false){
		$('.home-menucircle').fadeIn(300);
	}
	$('div.home-bannerNameContainer').css('height','70rem');
	$('div.home-bannerNameContainer').css('width','70rem');
	$('div.home-bannerNameContainer').css('background-color','rgba(0,0,0,0.1)');
	$('.home-bannerNameContainer').css('-webkit-border-radius','35rem');
	$('.home-bannerNameContainer').css('border-radius','35rem');
}
var homeMenuRevert = function(){
	$('div.home-bannerNameContainer').css('height','30rem');
	$('div.home-bannerNameContainer').css('width','56rem');
	$('div.home-bannerNameContainer').css('background-color','rgba(0,0,0,0)');
	$('.home-bannerNameContainer').css('-webkit-border-radius','0rem');
	$('.home-bannerNameContainer').css('border-radius','0rem');
	if (bHomeMenuVis){
		$('.home-menucircle').fadeOut(300);
	}
}

//DOCUMENT READY FUNCTION
$(function() {
	//ON PAGE LOAD EVENTS
	$('.home-menucircle').hide();
	$('.transitionPanel').children().hide();
	
	//ON HOVER TRIGGERED EVENTS
	$('div.home-bannerNameContainer').contents().add('div.home-bannerNameContainer').mouseenter(function() {
        homeMenuPeek();
		bHomeMenuVis = true;
		});
	$('div.home-bannerNameContainer').mouseleave(function() {
		homeMenuRevert();
		bHomeMenuVis = false;
    	});
		
	//home-menucircle hover events
	$('#home-circle-1').hover(function() {
		homeDirectionHalfPeek('top');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeDirectionHalfRevert('top');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-2').hover(function() {
		homeDirectionHalfPeek('left');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeDirectionHalfRevert('left');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-3').hover(function() {
		homeDirectionHalfPeek('right');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeDirectionHalfRevert('right');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-4').hover(function() {
		homeDirectionHalfPeek('bottom');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeDirectionHalfRevert('bottom');
		}
		bMouseHoverMenuCircle = false;
	});
	
	//"transitionPanel" (mouseable regions) mouseenter events
//	$('#home-topMouseable').mouseenter(function(){
//		homeDirectionHalfPeek('top');
//		});
//	$('#home-leftMouseable').mouseenter(function(){
//		homeDirectionHalfPeek('left');
//		});
//	$('#home-rightMouseable').mouseenter(function(){
//		homeDirectionHalfPeek('right');
//		});
//	$('#home-bottomMouseable').mouseenter(function(){
//		homeDirectionHalfPeek('bottom');
//		});
	
	//transitionPanel mouseleave events
//	$('#transitionPanel-top').mouseleave(function(){homeDirectionHalfRevert('top');});
//	$('#transitionPanel-left').mouseleave(function(){homeDirectionHalfRevert('left');});
//	$('#transitionPanel-right').mouseleave(function(){homeDirectionHalfRevert('right');});
//	$('#transitionPanel-bottom').mouseleave(function(){homeDirectionHalfRevert('bottom');});
	
	//MOUSE POSITION TRIGGERED EVENTS
//	$(document).mousemove(function(e){
//		if ((e.pageY > ($(document).height())*0.05
//				|| e.pageY < 0)
//				&& bMouseHoverMenuCircle == false) {
//			homeDirectionHalfRevert('top');
//		}
//		if ((e.pageX > ($(document).width())*0.05 
//				|| e.pageX < 0) 
//				&& bMouseHoverMenuCircle == false) {
//			homeDirectionHalfRevert('left');
//		}
//		if ((e.pageX < ($(document).width())*0.95 
//				|| e.pageX > ($(document).width())) 
//				&& bMouseHoverMenuCircle == false) {
//			homeDirectionHalfRevert('right');
//		}
//		if ((e.pageY < ($(document).height())*0.95 
//				|| e.pageY > ($(document).height())) 
//				&& bMouseHoverMenuCircle == false) {
//			homeDirectionHalfRevert('bottom');
//		}
//	});
	
	$('a.home-menucircle').on('click', function(e) {
		bClickedMenuCircle = true;
        var href = $(this).attr('href');
		e.preventDefault();
		
		switch ($(this).parent().attr('id')) {
			case 'home-circle-1':
				homeDirectionHalfShow('top');
	//			$("#transitionPanel-top").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-2':
				homeDirectionHalfShow('left');
	//			$("#transitionPanel-left").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-3':
				homeDirectionHalfShow('right');
	//			$("#transitionPanel-right").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-4':
				homeDirectionHalfShow('bottom');
	//			$("#transitionPanel-bottom").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				break;
			
			default:
				console.error('Animation error: Unknown element');
		}
		setTimeout(function() {window.open(href,"_self");},1500);
    });
	
});
