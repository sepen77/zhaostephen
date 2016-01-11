var appContent = angular.module('appContent', [])
	.directive('appContent', function(){
		return {
			restrict: 'E',
			scope: {
				data:'='
			},
			templateUrl: '/app/components/content/appContent.html',
			controller: 'appContentCtrl',
			controllerAs: 'ctrl'
		};
	})
	.controller('appContentCtrl', function($routeParams){

		var determineContent = function(){
			switch($routeParams.pageName){
				case 'profile':
					$('#content-target').load('/app/components/content/appContent-profile.html');
					break;
				case 'projects':
					$('#content-target').load('/app/components/content/appContent-projects.html');
					break;
				case 'photos':
					$('#content-target').load('/app/components/content/appContent-photos.html');
					break;
				case 'contact':
					$('#content-target').load('/app/components/content/appContent-contact.html');
					break;
				default:
					$('#content-target').load('/app/components/content/appContent-default.html');
			}
		}

		$(function(){
			determineContent();
		})
	});