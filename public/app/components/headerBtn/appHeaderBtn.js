var appHeaderBtn = angular.module("appHeaderBtn", [])
	.directive("appHeaderBtn", function(){
		return {
			restrict: "E",
			scope: {
				data: "="
			},
			templateUrl: "/app/components/headerBtn/appHeaderBtn.html",
			controller: "appHeaderBtnCtrl",
			controllerAs: "ctrl"
		};
	})
	.controller("appHeaderBtnCtrl", function($scope){
		this.btnTitle = $scope.data.title;
		this.btnText = $scope.data.text;
		this.btnUrl = $scope.data.url;
	});