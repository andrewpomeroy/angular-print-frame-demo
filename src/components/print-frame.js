"use strict";
/**
 */
export default {
	controller: controller,
	bindings: {
		inheritStyles: "<"
	},
	template: `
		<div>
			<div ng-transclude="ui"></div>
			<div>
				<iframe id="printDestinationIframe" class="u-visuallyHidden"></iframe>
				<div ng-transclude="content" class="u-visuallyHidden"></div>
			</div>
		</div>`,
	transclude: {
		"content": "content",
		"ui": "?ui",
	},
};

controller.$inject = ["$scope", "$timeout"];

// eslint-disable-next-line
function controller($scope, $timeout) {
	var $ctrl = this;

	$ctrl.requestPrint = function () {
		$scope.$broadcast("requestFrameContents");
	};

	$ctrl.$postLink = function () {
		const target = document.getElementById("printDestinationIframe");
		target.contentWindow.document.body.innerHTML = "";
		if ($ctrl.inheritStyles) {
			var targetHead = target.contentWindow.document.head;
			var arrStyleSheets = document.getElementsByTagName("style");
			for (var i = 0; i < arrStyleSheets.length; i++)
				targetHead.appendChild(arrStyleSheets[i].cloneNode(true));
			var arrStyleSheetLinks = document.querySelectorAll("link[rel=\"stylesheet\"]");
			for (var i = 0; i < arrStyleSheetLinks.length; i++)
				targetHead.appendChild(arrStyleSheetLinks[i].cloneNode(true));
		}
	};

	$ctrl.print = function (html) {
		const target = document.getElementById("printDestinationIframe");
		const targetDoc = target.contentWindow.document;
		targetDoc.body.innerHTML = html;
		var script = targetDoc.createElement("script");
		script.type = "text/javascript";
		var code = "window.print();";
		try {
			script.appendChild(targetDoc.createTextNode(code));
			targetDoc.body.appendChild(script);
		} catch (e) {
			script.text = code;
			targetDoc.body.appendChild(script);
		}
	};

}
