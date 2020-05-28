import angular from "angular";
import "@uirouter/angularjs";
import testPrintFrameTemplate from "./test-print-frame-template.html";

angular.module("wnd", ["ui.router"]).controller("HelloController", function ($scope) {
	$scope.person = "andrew";
});

angular.module("wnd").config(["$locationProvider",
	function ($locationProvider) {
		// $locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	}
]);

angular.module("wnd").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: testPrintFrameTemplate
		});

	}
]);