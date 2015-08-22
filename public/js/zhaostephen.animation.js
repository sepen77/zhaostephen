// JavaScript Document
//==========================================
//         ZHAOSTEPHEN ANIMATIONS 
//==========================================

// GLOBAL VARIABLES
var bHomeMenuVis = false,
	bHomeMenuCircleIsFadingIn = false,
	bHomeMenuCircleIsFadingOut = false,
	bMouseHoverMenuCircle = false,
	bClickedMenuCircle = false;

// Animation Options Def
var ANOPT_EASEOUT_800 = {duration: 800, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1000 = {duration: 1000, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1500 = {duration: 1500, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEIN_1500 = {duration: 1500, easing: 'easeInExpo', queue: false};

var ANOPT_DEF = ANOPT_EASEOUT_800;

//ANIMATION FUNCTIONS DEF
var homeTransitionPanelPeek = function(direction){
	// stop
	$('#bg-img').stop();
	$('#transitionPanel-'+direction).stop();
	
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

var homeTransitionPanelShow = function(direction){
	// stop
	$('#bg-img').stop();
	$('#transitionPanel-'+direction).stop();

	$('#transitionPanel-'+direction).children('.transitionPanel-bg').stop().fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	$('#bg-img').animate(JSON.parse('{"'+direction+'" : "100%"}'),ANOPT_EASEOUT_1500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').animate({'height': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'height': '100%'}, ANOPT_EASEOUT_1500);
			break;
	
		case 'left':
		case 'right':
			$('#bg-img').animate({'width': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'width': '100%'}, ANOPT_EASEOUT_1500);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
}

var homeTransitionPanelCont = function(direction){
	// stop
	$('#bg-img').stop();
	$('#transitionPanel-'+direction).stop();

	$('#transitionPanel-'+direction).children('.transitionPanel-bg').stop().fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	$('#bg-img').animate(JSON.parse('{"'+direction+'" : "100%"}'),ANOPT_EASEOUT_1500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').animate({'height': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'height': '100%'}, ANOPT_EASEOUT_1500);
			break;
	
		case 'left':
		case 'right':
			$('#bg-img').animate({'width': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'width': '100%'}, ANOPT_EASEOUT_1500);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
}

var homeTransitionPanelRevert = function(direction){
	// stop
	$('#bg-img').stop();
	$('#transitionPanel-'+direction).stop();
	
	$('#transitionPanel-'+direction).children().stop().fadeOut(500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('#bg-img').animate(JSON.parse('{"'+direction+'" : "0"}'),ANOPT_DEF);
			$('#bg-img').animate({'height': '100%'}, ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '0'}, ANOPT_DEF);
			break;
		
		case 'left':
		case 'right':
			$('#bg-img').animate(JSON.parse('{"'+direction+'" : "0"}'),ANOPT_EASEOUT_1000);
			$('#bg-img').animate({'width': '100%'}, ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '0'}, ANOPT_EASEOUT_1000);
			break;
		
		default:
			console.error('Animation err: Unknown direction');
	}
}

var homeMenuPeek = function(){	
	$('div.home-bannerNameContainer').animate({
		'height':'70rem',
		'width':'70rem',
		'background-color':'rgba(0,0,0,0.1)',
		'-webkit-border-radius':'35rem',
		'border-radius':'35rem'
		}, ANOPT_DEF);
	
	if($('.home-menucircle').is(':animated')) {
		$('.home-menucircle').stop().animate({'opacity':'100%'}, ANOPT_DEF);
    }
	else {
		$('.home-menucircle').fadeIn(ANOPT_DEF);
	}
}
var homeMenuRevert = function(){
	$('div.home-bannerNameContainer').animate({
		'height':'30rem',
		'width':'56rem',
		'background-color':'rgba(0,0,0,0)',
		'-webkit-border-radius':'0rem',
		'border-radius':'0rem'
		}, ANOPT_DEF);

	$('.home-menucircle').fadeOut(ANOPT_DEF);
}

// DOCUMENT READY FUNCTION
$(function() {
	// ON PAGE LOAD EVENTS
	$('.home-menucircle').hide();
	$('.transitionPanel').children().hide();
	
	// ON HOVER TRIGGERED EVENTS
	
	// home-bannerNameContainer mouseenter and mouseleave events
	$('div.home-bannerNameContainer').contents().add('div.home-bannerNameContainer').mouseenter(function() {
        homeMenuPeek();
	});
	$('div.home-bannerNameContainer').mouseleave(function() {
		homeMenuRevert();
    });
		
	// home-menucircle hover events
	$('#home-circle-1').hover(function() {
		homeTransitionPanelPeek('top');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('top');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-2').hover(function() {
		homeTransitionPanelPeek('left');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('left');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-3').hover(function() {
		homeTransitionPanelPeek('right');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('right');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#home-circle-4').hover(function() {
		homeTransitionPanelPeek('bottom');
		bMouseHoverMenuCircle = true;
	}, function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('bottom');
		}
		bMouseHoverMenuCircle = false;
	});
	
	//"transitionPanel" (mouseable regions) mouseenter events
//	$('#home-topMouseable').mouseenter(function(){
//		homeTransitionPanelPeek('top');
//		});
//	$('#home-leftMouseable').mouseenter(function(){
//		homeTransitionPanelPeek('left');
//		});
//	$('#home-rightMouseable').mouseenter(function(){
//		homeTransitionPanelPeek('right');
//		});
//	$('#home-bottomMouseable').mouseenter(function(){
//		homeTransitionPanelPeek('bottom');
//		});
	
	//transitionPanel mouseleave events
//	$('#transitionPanel-top').mouseleave(function(){homeTransitionPanelRevert('top');});
//	$('#transitionPanel-left').mouseleave(function(){homeTransitionPanelRevert('left');});
//	$('#transitionPanel-right').mouseleave(function(){homeTransitionPanelRevert('right');});
//	$('#transitionPanel-bottom').mouseleave(function(){homeTransitionPanelRevert('bottom');});
	
	//MOUSE POSITION TRIGGERED EVENTS
//	$(document).mousemove(function(e){
//		if ((e.pageY > ($(document).height())*0.05
//				|| e.pageY < 0)
//				&& bMouseHoverMenuCircle == false) {
//			homeTransitionPanelRevert('top');
//		}
//		if ((e.pageX > ($(document).width())*0.05 
//				|| e.pageX < 0) 
//				&& bMouseHoverMenuCircle == false) {
//			homeTransitionPanelRevert('left');
//		}
//		if ((e.pageX < ($(document).width())*0.95 
//				|| e.pageX > ($(document).width())) 
//				&& bMouseHoverMenuCircle == false) {
//			homeTransitionPanelRevert('right');
//		}
//		if ((e.pageY < ($(document).height())*0.95 
//				|| e.pageY > ($(document).height())) 
//				&& bMouseHoverMenuCircle == false) {
//			homeTransitionPanelRevert('bottom');
//		}
//	});
	
	// home-menucircle onclick event
	$('a.home-menucircle').on('click', function(e) {
		bClickedMenuCircle = true;
        var href = $(this).attr('href');
		e.preventDefault();
		
		switch ($(this).attr('id')) {
			case 'home-circle-1-a':
				homeTransitionPanelShow('top');
	//			$("#transitionPanel-top").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-2-a':
				homeTransitionPanelShow('left');
	//			$("#transitionPanel-left").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-3-a':
				homeTransitionPanelShow('right');
	//			$("#transitionPanel-right").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	//				setTimeout(function() {window.open(href,"_self");},1000);
	//			});
				break;
				
			case 'home-circle-4-a':
				homeTransitionPanelShow('bottom');
	//			$("#transitionPanel-bottom").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				break;
			
			default:
				console.error('Animation error: Unknown element');
		}
		setTimeout(function() {window.open(href,"_self");},1500);
    });
	
});
