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
		var prevWidth = $('html').width();
		var prevHeight = $('html').height();

		var makeBtnActive = function(){
			switch($routeParams.pageName){
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
					$('#topnav-target').load('/app/components/nav/appNavDef.html', makeBtnActive);
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
					$('#topnav-target').load('/app/components/nav/appNavSmall.html', makeBtnActive);
					return;
				}
			}
		}

		var loadNav = function(){
			var wndWidth = $('html').width();
			var wndHeight = $('html').height();
			if(wndWidth >= 1000){
				this.prevWidth = wndWidth;
				$('#topnav-target').load('/app/components/nav/appNavDef.html', makeBtnActive);
			}
			else{
				this.prevWidth = wndWidth;
				$('#topnav-target').load('/app/components/nav/appNavSmall.html', makeBtnActive);
			}
		}

		$(function(){
			loadNav();
			$(window).bind('resize',function() {
				determineNav();
			}).trigger('resize');

			$scope.$on('pageChange', function(){
				loadNav();
			})
		});
	})