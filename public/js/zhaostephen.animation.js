// JavaScript Document
//==========================================
//            ANIMATIONS JS LIB
//==========================================

//GLOBAL VAR
var bHomeMenuVis = false;
var bMouseHoverMenuCircle = false;
var bClickedMenuCircle = false;
var defaultAnimOptions = {duration: 800, easing: 'easeOutExpo', queue: false};

//ANIMATION FUNCTIONS DEF
//--------------css animation---------------
//function homeDirectionHalfPeek(direction){
//	if (direction == 'top' || direction == 'bottom'){
//		$('#bg-img').css(direction, '10%');
//		$('#bg-img').css('height', '90%');
//		$('#transitionPanel-'+direction).css('height', '10%');
//	}
//	else if (direction == 'left' || direction == 'right'){
//		$('#bg-img').css(direction, '20%');
//		$('#bg-img').css('width','80%');
//		$('#transitionPanel-'+direction).css('width','20%');
//	}
//	$('#transitionPanel-'+direction).children('.transitionPanel-heading').fadeIn(200);
//}
function homeDirectionHalfPeek(direction){
	var slowerAnimOptions = {duration: 1000, easing: 'easeOutExpo', queue: false};
	if (direction == 'top'){
		$('#bg-img').animate({'top': '10%'},defaultAnimOptions);
		$('#bg-img').animate({'height': '90%'},defaultAnimOptions);
		$('#transitionPanel-'+direction).animate({'height': '10%'},defaultAnimOptions);
	}
	else if (direction == 'bottom'){
		$('#bg-img').animate({'bottom': '10%'},defaultAnimOptions);
		$('#bg-img').animate({'height': '90%'},defaultAnimOptions);
		$('#transitionPanel-'+direction).animate({'height': '10%'},defaultAnimOptions);
	}
	else if (direction == 'left'){
		$('#bg-img').animate({'left': '20%'},slowerAnimOptions);
		$('#bg-img').animate({'width': '80%'},slowerAnimOptions);
		$('#transitionPanel-'+direction).animate({'width': '20%'},slowerAnimOptions);
	}
	else if (direction == 'right'){
		$('#bg-img').animate({'right': '20%'},slowerAnimOptions);
		$('#bg-img').animate({'width': '80%'},slowerAnimOptions);
		$('#transitionPanel-'+direction).animate({'width': '20%'},slowerAnimOptions);
	}
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().fadeIn(300);
}
//--------------css animation---------------
//function homeDirectionHalfShow(direction){
//	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(200);
//	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({'color': '#1B1B1B'},200);
//	$('#bg-img').css(direction,'100%');
//	if (direction == 'top' || direction == 'bottom'){
//		$('#bg-img').css('height','0%');
//		$('#transitionPanel-'+direction).css('height','100%');
//	}
//	else if (direction == 'left' || direction == 'right'){
//		$('#bg-img').css('width','0%');
//		$('#transitionPanel-'+direction).css('width','100%');
//	}
//}
function homeDirectionHalfShow(direction){
	var animOptions = {duration: 1500, easing: 'easeOutExpo', queue: false};
	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	var animProperties = {};
	animProperties[direction] = '100%';
	$('#bg-img').stop().animate(animProperties,animOptions);
	if (direction == 'top' || direction == 'bottom'){
		$('#bg-img').animate({'height': '0'}, animOptions);
		$('#transitionPanel-'+direction).stop().animate({'height': '100%'}, animOptions);
	}
	else if (direction == 'left' || direction == 'right'){
		$('#bg-img').animate({'width': '0'}, animOptions);
		$('#transitionPanel-'+direction).stop().animate({'width': '100%'}, animOptions);
	}
}

function homeDirectionHalfCont(direction){
	var animOptions = {duration: 1500, easing: 'easeInExpo', queue: false};
	$('#transitionPanel-'+direction).children('.transitionPanel-bg').fadeIn(300);
	$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().animate({
		'color': '#1B1B1B',
		'font-size': '6.4rem'},100);
	var animProperties = {};
	animProperties[direction] = '100%';
	$('#bg-img').stop().animate(animProperties,animOptions);
	if (direction == 'top' || direction == 'bottom'){
		$('#bg-img').animate({'height': '0'}, animOptions);
		$('#transitionPanel-'+direction).stop().animate({'height': '100%'}, animOptions);
	}
	else if (direction == 'left' || direction == 'right'){
		$('#bg-img').animate({'width': '0'}, animOptions);
		$('#transitionPanel-'+direction).stop().animate({'width': '100%'}, animOptions);
	}
}
//--------------css animation---------------
//function homeDirectionHalfRevert(direction){
//	$('#transitionPanel-'+direction).children().fadeOut(200);
//	$('#bg-img').css(direction,'0');
//	if (direction == 'top' || direction == 'bottom'){
//		$('#bg-img').css('height','100%');
//		$('#transitionPanel-'+direction).css('height','0');
//	}
//	else if (direction == 'left' || direction == 'right'){
//		$('#bg-img').css('width','100%');
//		$('#transitionPanel-'+direction).css('width','0');
//	}
//}
function homeDirectionHalfRevert(direction){
	var slowerAnimOptions = {duration: 1000, easing: 'easeOutExpo', queue: false};
	$('#transitionPanel-'+direction).children().stop().fadeOut(500);
	var animProperties = {};
	animProperties[direction] = '0';
	if (direction == 'top' || direction == 'bottom'){
		$('#bg-img').stop().animate(animProperties,defaultAnimOptions);
		$('#bg-img').animate({'height': '100%'}, defaultAnimOptions);
		$('#transitionPanel-'+direction).stop().animate({'height': '0'}, defaultAnimOptions);
	}
	else if (direction == 'left' || direction == 'right'){
		$('#bg-img').stop().animate(animProperties,slowerAnimOptions);
		$('#bg-img').animate({'width': '100%'}, slowerAnimOptions);
		$('#transitionPanel-'+direction).stop().animate({'width': '0'}, slowerAnimOptions);
	}
}
function homeMenuPeek(){
	if (bHomeMenuVis == false){
		$('.home-menucircle').fadeIn(300);
	}
	$('div.home-bannerNameContainer').css('height','70rem');
	$('div.home-bannerNameContainer').css('width','70rem');
	$('div.home-bannerNameContainer').css('background-color','rgba(0,0,0,0.1)');
	$('.home-bannerNameContainer').css('-webkit-border-radius','35rem');
	$('.home-bannerNameContainer').css('border-radius','35rem');
}
function homeMenuRevert(){
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
		if ($(this).parent().attr('id') == 'home-circle-1'){
			homeDirectionHalfShow('top');
//			$("#transitionPanel-top").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
//				setTimeout(function() {window.open(href,"_self");},1000);
//			});
		}
		else if ($(this).parent().attr('id') == 'home-circle-2'){
			homeDirectionHalfShow('left');
//			$("#transitionPanel-left").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
//				setTimeout(function() {window.open(href,"_self");},1000);
//			});
		}
		else if ($(this).parent().attr('id') == 'home-circle-3'){
			homeDirectionHalfShow('right');
//			$("#transitionPanel-right").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
//				setTimeout(function() {window.open(href,"_self");},1000);
//			});
		}
		else if ($(this).parent().attr('id') == 'home-circle-4'){
			homeDirectionHalfShow('bottom');
//			$("#transitionPanel-bottom").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
//				setTimeout(function() {window.open(href,"_self");},1000);
//			});
		}
		setTimeout(function() {window.open(href,"_self");},1500);
    });
	
});
