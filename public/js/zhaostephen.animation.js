// JavaScript Document
//==========================================
//         ZHAOSTEPHEN ANIMATIONS 
//==========================================

console.log("loading animations");

// GLOBAL VARIABLES
var bMouseHoverMenuCircle = false,
	bClickedMenuCircle = false;

// Animation Options Def
var ANOPT_EASEOUT_300 = {duration: 300, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_800 = {duration: 800, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1000 = {duration: 1000, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEOUT_1500 = {duration: 1500, easing: 'easeOutExpo', queue: false},
	ANOPT_EASEIN_1500 = {duration: 1500, easing: 'easeInExpo', queue: false};

var ANOPT_DEF = ANOPT_EASEOUT_800;

//ANIMATION FUNCTIONS DEF
var homeTransitionPanelPeek = function(direction){
	// stop
	$('#transitionPanel-'+direction).stop();
	
	switch (direction) {
		case 'top':
			$('.bg-img').animate({'top': '10%'},ANOPT_DEF);
			$('.bg-img').animate({'height': '90%'},ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '10%'},ANOPT_DEF);
			break;
			
		case 'bottom':
			$('.bg-img').animate({'bottom': '10%'},ANOPT_DEF);
			$('.bg-img').animate({'height': '90%'},ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '10%'},ANOPT_DEF);
			break;
	
		case 'left':
			$('.bg-img').animate({'left': '20%'},ANOPT_EASEOUT_1000);
			$('.bg-img').animate({'width': '80%'},ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '20%'},ANOPT_EASEOUT_1000);
			break;
			
		case 'right':
			$('.bg-img').animate({'right': '20%'},ANOPT_EASEOUT_1000);
			$('.bg-img').animate({'width': '80%'},ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '20%'},ANOPT_EASEOUT_1000);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
	
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().fadeIn(withAddedComplete(ANOPT_EASEOUT_300, function(){
		$('#transitionPanel-'+direction).children('.transitionPanel-heading').css({'opacity':'100%'});
	}));
}

var homeTransitionPanelShow = function(direction){
	// stop
	$('#transitionPanel-'+direction).stop();
	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(ANOPT_EASEOUT_300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	$('.bg-img').animate(JSON.parse('{"'+direction+'" : "100%"}'),ANOPT_EASEOUT_1500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('.bg-img').animate({'height': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'height': '100%'}, ANOPT_EASEOUT_1500);
			break;
	
		case 'left':
		case 'right':
			$('.bg-img').animate({'width': '0'}, ANOPT_EASEOUT_1500);
			$('#transitionPanel-'+direction).animate({'width': '100%'}, ANOPT_EASEOUT_1500);
			break;
		
		default:
			console.error('Animation error: Unknown direction');
	}
}

var homeTransitionPanelRevert = function(direction){
	// stop
	$('#transitionPanel-'+direction).stop();
	
	$('#transitionPanel-'+direction).children().stop().fadeOut(500);
	
	switch (direction) {
		case 'top':
		case 'bottom':
			$('.bg-img').animate(JSON.parse('{"'+direction+'" : "0"}'),ANOPT_DEF);
			$('.bg-img').animate({'height': '100%'}, ANOPT_DEF);
			$('#transitionPanel-'+direction).animate({'height': '0'}, ANOPT_DEF);
			break;
		
		case 'left':
		case 'right':
			$('.bg-img').animate(JSON.parse('{"'+direction+'" : "0"}'),ANOPT_EASEOUT_1000);
			$('.bg-img').animate({'width': '100%'}, ANOPT_EASEOUT_1000);
			$('#transitionPanel-'+direction).animate({'width': '0'}, ANOPT_EASEOUT_1000);
			break;
		
		default:
			console.error('Animation err: Unknown direction');
	}
}

var homeMenuPeek = function(){	
	$('#bannerNameContainer').animate({
		'height':'70rem',
		'width':'70rem',
		'-webkit-border-radius':'35rem',
		'border-radius':'35rem'
		}, ANOPT_DEF);
	setTimeout(function(){
		$('#bannerName').stop().fadeOut(ANOPT_DEF);
		$('#bannerLogo').stop().fadeIn(withAddedComplete(ANOPT_DEF, function(){
			$('#bannerLogo').css({'opacity':'100%'});
		}));
		$('.home.menucircle').stop().fadeIn(withAddedComplete(ANOPT_DEF, function(){
			$('.home.menucircle').css({'opacity':'100%'});
		}));
	}, 300);
}

var homeMenuRevert = function(){
	$('#bannerNameContainer').animate({
		'height':'30rem',
		'width':'56rem',
		'-webkit-border-radius':'0rem',
		'border-radius':'0rem'
		}, ANOPT_DEF);
	setTimeout(function(){
		$('#bannerLogo').stop().fadeOut(ANOPT_DEF);
		$('#bannerName').stop().fadeIn(withAddedComplete(ANOPT_DEF, function(){
			$('#bannerName').css({'opacity':'100%'});
		}));
		$('.home.menucircle').stop().fadeOut(ANOPT_DEF);
	}, 300);
}

// DOCUMENT READY FUNCTION
$(function() {
	// ON PAGE LOAD EVENTS
	$('.home.menucircle').hide();
	$('.transitionPanel').children().hide();
	
	// ON HOVER TRIGGERED EVENTS
	
	// home-bannerNameContainer mouseenter and mouseleave events
	$('#bannerNameContainer').hover(function() {
        homeMenuPeek();
	},
	function() {
		homeMenuRevert();
    });
		
	// home-menucircle hover events
	$('#circle-1').hover(function() {
		homeTransitionPanelPeek('top');
		bMouseHoverMenuCircle = true;
	},
	function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('top');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#circle-2').hover(function() {
		homeTransitionPanelPeek('left');
		bMouseHoverMenuCircle = true;
	},
	function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('left');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#circle-3').hover(function() {
		homeTransitionPanelPeek('right');
		bMouseHoverMenuCircle = true;
	},
	function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('right');
		}
		bMouseHoverMenuCircle = false;
	});
	$('#circle-4').hover(function() {
		homeTransitionPanelPeek('bottom');
		bMouseHoverMenuCircle = true;
	},
	function() {
		if (!bClickedMenuCircle) {
			homeTransitionPanelRevert('bottom');
		}
		bMouseHoverMenuCircle = false;
	});
	
	// home-menucircle onclick event
	$('.home.menucircle-a').click(function(e) {
		bClickedMenuCircle = true;
        var href = $(this).attr('href');
		e.preventDefault();
		
		switch ($(this).attr('id')) {
			case 'circle-1-a':
				homeTransitionPanelShow('top');
				break;
				
			case 'circle-2-a':
				homeTransitionPanelShow('left');
				break;
				
			case 'circle-3-a':
				homeTransitionPanelShow('right');
				break;
				
			case 'circle-4-a':
				homeTransitionPanelShow('bottom');
				break;
			
			default:
				console.error('Animation error: Unknown element');
		}
		setTimeout(function() {
			window.open(href,"_self");
		},ANOPT_EASEOUT_1500.duration);
    });
	
});

console.log("done loading animations");
