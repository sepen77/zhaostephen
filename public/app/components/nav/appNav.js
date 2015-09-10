var appNav = angular.module('appNav', [])
	.directive('appNav', function(){
		return {
			restrict:'E',
			scope: {
				data:'='
			},
			templateUrl: '/app/components/nav/appNav.html',
			controller: 'appNavCtrl',
			controllerAs: 'ctrl'
		}
	})
	.controller('appNavCtrl', function($scope, $routeParams){
		this.pageName = $scope.data.pageName;
		this.prevWidth = $('html').width();
		this.prevHeight = $('html').height();

		var determineNav = function(){
			var wndWidth = $('html').width();
			var wndHeight = $('html').height();
			if(wndWidth >= 1000){
				if(this.prevWidth >= 1000){
					this.prevWidth = wndWidth;
					return;
				}
				else{
					this.prevWidth = wndWidth;
					$('#topnav').load('/app/components/nav/appNavDef.html');
					return;
				}
			}
			else{
				if(this.prevWidth < 1000){
					this.prevWidth = wndWidth;
					return;
				}
				else{
					this.prevWidth = wndWidth;
					$('#topnav').load('/app/components/nav/appNavSmall.html');
					return;
				}
			}
		}

		var loadNav = function(pageName){
			var wndWidth = $('html').width();
			var wndHeight = $('html').height();
			if(wndWidth >= 1000){
				this.prevWidth = wndWidth;
				$('#topnav').load('/app/components/nav/appNavDef.html');
			}
			else{
				this.prevWidth = wndWidth;
				$('#topnav').load('/app/components/nav/appNavSmall.html');
			}
			switch(pageName){
				case 'profile':
					$('#nav-btn-profile').addClass('active');
					break;

				case 'projects':
					$('#nav-btn-projects').addClass('active');
					break;

				case 'photos':
					$('#nav-btn-photos').addClass('active');
					break;

				case 'contact':
					$('#nav-btn-contact').addClass('active');
					break;
			}
		}

		$(function(){
			loadNav($routeParams.pageName);
			$(window).bind('resize',function() {
				determineNav();
			}).trigger('resize');

			$scope.$on('pageChange', function(){
				loadNav($routeParams.pageName);
			})
		});
	})