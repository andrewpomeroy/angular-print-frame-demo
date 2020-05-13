"use strict";
/**
 */
export default {
	controller: controller,
	template: `
		<div class="FlexView">
			<div ng-transclude="ui"></div>
			<div>
				<iframe id="printDestinationIframe" class="u-visuallyHidden"></iframe>
				<div ng-transclude="content" class="FlexView u-visuallyHidden"></div>
			</div>
		</div>`,
	replace: true,
	transclude: {
		"content": "content",
		"ui": "?ui",
	},
};

controller.$inject = ["$scope"];

// eslint-disable-next-line
function controller($scope) {

	this.requestPrint = function () {
		$scope.$broadcast("requestFrameContents");
	};

	this.print = function (html) {
		const target = document.getElementById("printDestinationIframe");
		const newBody = `
			<body>
				${html}
				<script type="text/javascript">
					window.print()
				</script>	
			</body>`;
		target.contentWindow.document.write(newBody);
	};

}
