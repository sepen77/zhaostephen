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
	.controller("appHomeCtrl", function($scope, animService){
		// DOCUMENT READY FUNCTION
		$(function() {
			// ON PAGE LOAD EVENTS
			animService.resetAll();
			
			// ON HOVER TRIGGERED EVENTS
			
			// home-bannerNameContainer mouseenter and mouseleave events
			$('#bannerNameContainer').hover(function() {
		        animService.homeMenuPeek();
			},
			function() {
				animService.homeMenuRevert();
		    });
				
			// home-menucircle hover events
			$('#circle-1-a').hover(function() {
				animService.homeTransitionPanelPeek('top');
				animService.bMouseHoverMenuCircle = true;
			},
			function() {
				if (!animService.bClickedMenuCircle) {
					animService.homeTransitionPanelRevert('top');
				}
				animService.bMouseHoverMenuCircle = false;
			});
			$('#circle-2-a').hover(function() {
				animService.homeTransitionPanelPeek('left');
				animService.bMouseHoverMenuCircle = true;
			},
			function() {
				if (!animService.bClickedMenuCircle) {
					animService.homeTransitionPanelRevert('left');
				}
				animService.bMouseHoverMenuCircle = false;
			});
			$('#circle-3-a').hover(function() {
				animService.homeTransitionPanelPeek('right');
				animService.bMouseHoverMenuCircle = true;
			},
			function() {
				if (!animService.bClickedMenuCircle) {
					animService.homeTransitionPanelRevert('right');
				}
				animService.bMouseHoverMenuCircle = false;
			});
			$('#circle-4-a').hover(function() {
				animService.homeTransitionPanelPeek('bottom');
				animService.bMouseHoverMenuCircle = true;
			},
			function() {
				if (!animService.bClickedMenuCircle) {
					animService.homeTransitionPanelRevert('bottom');
				}
				animService.bMouseHoverMenuCircle = false;
			});

			// home-menucircle onclick event
			$('.home.menucircle-a').click(function(e) {
				animService.bClickedMenuCircle = true;
		        var href = $(this).attr('href');
				e.preventDefault();
				
				switch ($(this).attr('id')) {
					case 'circle-1-a':
						animService.homeTransitionPanelShow('top');
						break;
						
					case 'circle-2-a':
						animService.homeTransitionPanelShow('left');
						break;
						
					case 'circle-3-a':
						animService.homeTransitionPanelShow('right');
						break;
						
					case 'circle-4-a':
						animService.homeTransitionPanelShow('bottom');
						break;
					
					default:
						console.error('Animation error: Unknown element');
				}
				setTimeout(function() {
					window.open(href,"_self");
				},1500);
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