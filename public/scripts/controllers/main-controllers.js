
var app = angular.module('main-controllers', []);

app.controller('NavController', function() {
	this.toggleNav = function() {

		// If active
		if ($('#hamburger-button').hasClass('hamburger-button-active')) {
			$('#hamburger-button').removeClass('hamburger-button-active');
			$('.background-dimmer').removeClass('dimmed-out');

		// If not active
		} else {
			$('#hamburger-button').addClass('hamburger-button-active');
			$('.background-dimmer').addClass('dimmed-out');
		}
	}

	this.scrollToSection = function(desiredSection) {

		if (desiredSection == "welcome") {
			$('html').animate({
				scrollTop: 0
			}, 500);
		}

		if (desiredSection == "portfolio") {
			$('html').animate({
				scrollTop: $('#view-on-github').offset().top - $('#topbar-container').height()
			}, 500);
		}

		if (desiredSection == "about") {
			$('html').animate({
				scrollTop: $('#about-container').offset().top - $('#topbar-container').height()
			}, 500);
		}

		if (desiredSection == "contact") {
			$('html').animate({
				scrollTop: $('html').height()
			}, 500);
		}
	}
});

app.controller('ProjectController', ['$http', '$scope', function($http, $scope) {
	$http.get('/project_resources/projects.json').then(function(data) {
		$scope.projectList = data.data;
	});
}]);