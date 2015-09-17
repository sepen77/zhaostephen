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
					$('#content-target').load('/app/components/content/appContent-wip.html');
					break;
				case 'photos':
					$('#content-target').load('/app/components/content/appContent-wip.html');
					break;
				case 'contact':
					$('#content-target').load('/app/components/content/appContent-wip.html');
					break;
				default:
					$('#content-target').add('No such page');
			}
		}

		$(function(){
			determineContent();
		})
	});