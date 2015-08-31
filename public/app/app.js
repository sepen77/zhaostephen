var app = angular.module("zhaostephenApp", [
		"ngRoute",
		"appHeaderBtn"
	])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "appHomeCtrl",
				controllerAs: "ctrl",
				templateUrl: "/app/components/home/home.html"
			})
			.when("/pages/:pageName", {
				controller: "appPageCtrl",
				controllerAs: "ctrl",
				templateUrl: "/app/components/pages/pages.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	})
	.controller("appHomeCtrl", function($scope){
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
	})
	.controller("appPageCtrl", function($scope, $routeParams){
		this.pageName = $routeParams.pageName;
		this.headerBtns = [
		{
			name: "profile",
			title: "Profile",
			text: "Profile",
			url: "/#/pages/profile"
		},
		{
			name: "projects",
			title: "Projects",
			text: "Projects",
			url: "/#/pages/projects"
		},
		{
			name: "photos",
			title: "Photography",
			text: "Photography",
			url: "/#/pages/photos"
		},
		{
			name: "contact",
			title: "Contact",
			text: "Contact",
			url: "/#/pages/contact"
		}]
	});