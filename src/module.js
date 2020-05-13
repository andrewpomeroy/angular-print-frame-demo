import angular from "angular";
import "@uirouter/angularjs";
import testComponent from "./components/test-component";
import printFrame from "./components/print-frame";
import printFrameSource from "./components/print-frame-source";
import testPrintFrameTemplate from "./test-print-frame-template.html";

angular.module("app", ["ui.router"]).controller("HelloController", function ($scope) {
	$scope.person = "andrew";
});

angular.module("app").config(["$locationProvider",
	function ($locationProvider) {
		// $locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	}
]);

angular.module("app").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: testPrintFrameTemplate
		});

	}
]);


angular.module("app").component("testComponent", testComponent);
angular.module("app").component("printFrame", printFrame);
angular.module("app").component("printFrameSource", printFrameSource);