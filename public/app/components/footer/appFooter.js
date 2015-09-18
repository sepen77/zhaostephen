var appFooter = angular.module('appFooter', [])
	.directive('appFooter', function(){
		return {
			restrict:'E',
			scope: {
				data:'='
			},
			templateUrl: '/app/components/footer/appFooter.html',
			controller: 'appFooterCtrl',
			controllerAs: 'ctrl'
		}
	})
	.controller('appFooterCtrl', function($scope){
		
	});