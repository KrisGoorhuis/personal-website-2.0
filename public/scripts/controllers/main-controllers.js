
var app = angular.module('main-controllers', []);

app.controller('NavController', function() {
	this.toggleNav = function() {
		if ($('#hamburger-button').hasClass('hamburger-button-active')) {
			$('#hamburger-button').removeClass('hamburger-button-active');
		//	$('#nav-links-div').css('position', 'relative');
		} else {
			$('#hamburger-button').addClass('hamburger-button-active');
			//$('#nav-links-div').css('position', 'absolute');
		}
	}

	this.changePage = function(desiredPage) {
		$('#nav-home').removeClass('active');
		$('#nav-about').removeClass('active');
		$('#nav-contact').removeClass('active');

		if (desiredPage == "home") {
			$('#nav-home').addClass('active');
		}
		if (desiredPage == "about") {
			$('#nav-about').addClass('active');
		}
		if (desiredPage == "contact") {
			$('#nav-contact').addClass('active');
		}
	}
});

app.controller('ProjectController', ['$http', '$scope', function($http, $scope) {
	$http.get('/project_resources/projects.json').then(function(data) {
		$scope.projectList = data.data;
	});
}]);