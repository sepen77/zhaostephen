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
		//this.pageName = "home";
	})
	.controller("appPageCtrl", function($scope, $routeParams){
		//this.pageName = $routeParams.pageName;
	});