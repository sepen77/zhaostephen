var app = angular.module("zhaostephenApp", [
		"ngRoute"
	])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "appHomeCtrl",
				templateUrl: "app/components/home/home.html"
			})
			.when("/pages/:pageName", {
				controller: "appPageCtrl",
				templateUrl: "app/components/pages/pages.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	})
	.controller("appHomeCtrl", function($scope){
		// DOCUMENT READY FUNCTION
		$(function() {
			// ON PAGE LOAD EVENTS
			$('.home-menucircle').hide();
			$('.transitionPanel').children().hide();
			
			// ON HOVER TRIGGERED EVENTS
			
			// home-bannerNameContainer mouseenter and mouseleave events
			$('div.home-bannerNameContainer').hover(function() {
		        homeMenuPeek();
			},
			function() {
				homeMenuRevert();
		    });
				
			// home-menucircle hover events
			$('#home-circle-1').hover(function() {
				homeTransitionPanelPeek('top');
				bMouseHoverMenuCircle = true;
			},
			function() {
				if (!bClickedMenuCircle) {
					homeTransitionPanelRevert('top');
				}
				bMouseHoverMenuCircle = false;
			});
			$('#home-circle-2').hover(function() {
				homeTransitionPanelPeek('left');
				bMouseHoverMenuCircle = true;
			},
			function() {
				if (!bClickedMenuCircle) {
					homeTransitionPanelRevert('left');
				}
				bMouseHoverMenuCircle = false;
			});
			$('#home-circle-3').hover(function() {
				homeTransitionPanelPeek('right');
				bMouseHoverMenuCircle = true;
			},
			function() {
				if (!bClickedMenuCircle) {
					homeTransitionPanelRevert('right');
				}
				bMouseHoverMenuCircle = false;
			});
			$('#home-circle-4').hover(function() {
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
			$('a.home-menucircle').click(function(e) {
				bClickedMenuCircle = true;
		        var href = $(this).attr('href');
				e.preventDefault();
				
				switch ($(this).attr('id')) {
					case 'home-circle-1-a':
						homeTransitionPanelShow('top');
						break;
						
					case 'home-circle-2-a':
						homeTransitionPanelShow('left');
						break;
						
					case 'home-circle-3-a':
						homeTransitionPanelShow('right');
						break;
						
					case 'home-circle-4-a':
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
	})
	.controller("appPageCtrl", function($scope, $routeParams){
		this.pageName = $routeParams.pageName;
	});