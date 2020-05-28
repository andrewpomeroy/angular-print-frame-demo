"use strict";
/**
 */
var printFrameSource = {
	require: {
		printFrame: "^printFrame"
	},
	controller: controller,
	transclude: true,
	template: "<ng-transclude class=\"FlexView\"></ng-transclude>"
};

controller.$inject = ["$timeout", "$element", "$scope", "$state", "$q", "$window"];

// eslint-disable-next-line
function controller($timeout, $element, $scope, $state, $q, $window) {

	$scope.$on("requestFrameContents", () => {
		var html = $element.html();
		this.printFrame.print(html);
	});

}

angular.module("wnd").component("printFrameSource", printFrameSource)