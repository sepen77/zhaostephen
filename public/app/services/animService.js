app.factory("animService", function(){
	var service = {};

	// STATE VARIABLES
	service.bMouseHoverMenuCircle = false;
	service.bClickedMenuCircle = false;

	// Animation Options Def
	service.ANOPT_EASEOUT_300 = {duration: 300, easing: 'easeOutExpo', queue: false};
	service.ANOPT_EASEOUT_800 = {duration: 800, easing: 'easeOutExpo', queue: false};
	service.ANOPT_EASEOUT_1000 = {duration: 1000, easing: 'easeOutExpo', queue: false};
	service.ANOPT_EASEOUT_1500 = {duration: 1500, easing: 'easeOutExpo', queue: false};
	service.ANOPT_EASEIN_1500 = {duration: 1500, easing: 'easeInExpo', queue: false};

	service.ANOPT_DEF = service.ANOPT_EASEOUT_800;

	service.resetAll = function(){
		service.bClickedMenuCircle = false;
		$('.home.menucircle').hide();
		$('.transitionPanel').children().hide();
		$('#bannerLogo').hide();
	}

	//ANIMATION FUNCTIONS DEF
	service.homeTransitionPanelPeek = function(direction){
		// stop
		$('#transitionPanel-'+direction).stop();
		
		switch (direction) {
			case 'top':
				$('.bg-img').animate({'top': '10%'},service.ANOPT_DEF);
				$('.bg-img').animate({'height': '90%'},service.ANOPT_DEF);
				$('#transitionPanel-'+direction).animate({'height': '10%'},service.ANOPT_DEF);
				break;
				
			case 'bottom':
				$('.bg-img').animate({'bottom': '10%'},service.ANOPT_DEF);
				$('.bg-img').animate({'height': '90%'},service.ANOPT_DEF);
				$('#transitionPanel-'+direction).animate({'height': '10%'},service.ANOPT_DEF);
				break;
		
			case 'left':
				$('.bg-img').animate({'left': '20%'},service.ANOPT_EASEOUT_1000);
				$('.bg-img').animate({'width': '80%'},service.ANOPT_EASEOUT_1000);
				$('#transitionPanel-'+direction).animate({'width': '20%'},service.ANOPT_EASEOUT_1000);
				break;
				
			case 'right':
				$('.bg-img').animate({'right': '20%'},service.ANOPT_EASEOUT_1000);
				$('.bg-img').animate({'width': '80%'},service.ANOPT_EASEOUT_1000);
				$('#transitionPanel-'+direction).animate({'width': '20%'},service.ANOPT_EASEOUT_1000);
				break;
			
			default:
				console.error('Animation error: Unknown direction');
		}
		
		$('#transitionPanel-'+direction).children('.transitionPanel-heading').stop().fadeIn(withAddedComplete(service.ANOPT_EASEOUT_300, function(){
			$('#transitionPanel-'+direction).children('.transitionPanel-heading').css({'opacity':'100%'});
		}));
	}

	service.homeTransitionPanelShow = function(direction){
		transitionPanel = $('#transitionPanel-'+direction);
		bgImg = $('.bg-img');
		// stop
		transitionPanel.stop();
		transitionPanel.children('.transitionPanel-bg').fadeIn(service.ANOPT_EASEOUT_300);
		transitionPanel.children('.transitionPanel-heading').animate({
			'color': '#1B1B1B',
			'font-size': '6.4rem'},100);
		bgImg.animate(JSON.parse('{"'+direction+'" : "100%"}'),service.ANOPT_EASEOUT_1500);
		
		switch (direction) {
			case 'top':
			case 'bottom':
				bgImg.animate({'height': '0'}, service.ANOPT_EASEOUT_1500);
				transitionPanel.animate({'height': '100%'}, service.ANOPT_EASEOUT_1500);
				break;
		
			case 'left':
			case 'right':
				bgImg.animate({'width': '0'}, service.ANOPT_EASEOUT_1500);
				transitionPanel.animate({'width': '100%'}, service.ANOPT_EASEOUT_1500);
				break;
			
			default:
				console.error('Animation error: Unknown direction');
		}
	}

	service.homeTransitionPanelRevert = function(direction){
		transitionPanel = $('#transitionPanel-'+direction);
		bgImg = $('.bg-img');
		// stop
		transitionPanel.stop();
		transitionPanel.children().stop().fadeOut(500);
		
		switch (direction) {
			case 'top':
			case 'bottom':
				bgImg.animate(JSON.parse('{"'+direction+'" : "0"}'),service.ANOPT_DEF);
				bgImg.animate({'height': '100%'}, service.ANOPT_DEF);
				transitionPanel.animate({'height': '0'}, service.ANOPT_DEF);
				break;
			
			case 'left':
			case 'right':
				bgImg.animate(JSON.parse('{"'+direction+'" : "0"}'),service.ANOPT_EASEOUT_1000);
				bgImg.animate({'width': '100%'}, service.ANOPT_EASEOUT_1000);
				transitionPanel.animate({'width': '0'}, service.ANOPT_EASEOUT_1000);
				break;
			
			default:
				console.error('Animation err: Unknown direction');
		}
	}

	service.homeMenuPeek = function(){	
		$('#bannerNameContainer').animate({
			'height':'70rem',
			'width':'70rem',
			'-webkit-border-radius':'35rem',
			'border-radius':'35rem'
			}, service.ANOPT_DEF);
		//setTimeout(function(){
			$('#bannerName').stop().fadeOut(service.ANOPT_DEF);
			$('#bannerLogo').stop().fadeIn(withAddedComplete(service.ANOPT_DEF, function(){
				$('#bannerLogo').css({'opacity':'100%'});
			}));
			$('.home.menucircle').stop().fadeIn(withAddedComplete(service.ANOPT_DEF, function(){
				
				$('.home.menucircle').css({'opacity':'100%'});
			}));
		//}, 300);
	}

	service.homeMenuRevert = function(){
		$('#bannerNameContainer').animate({
			'height':'30rem',
			'width':'56rem',
			'-webkit-border-radius':'0rem',
			'border-radius':'0rem'
			}, service.ANOPT_DEF);
		//setTimeout(function(){
			$('#bannerLogo').stop().fadeOut(service.ANOPT_DEF);
			$('#bannerName').stop().fadeIn(withAddedComplete(service.ANOPT_DEF, function(){
				$('#bannerName').css({'opacity':'100%'});
			}));
			$('.home.menucircle').stop().fadeOut(service.ANOPT_DEF);
		//}, 300);
	}

	return service;

});
