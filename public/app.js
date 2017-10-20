
(function() {
	var app = angular.module('personalWebsiteApp', ['nav-directives', 'main-controllers']);

})();


function moveNavbar() {
		var jumboMargin = $('#main-jumbotron-container').css('margin-left');
		var windowWidth = $(window).width();

		if (windowWidth > 1300) {
			console.log($(window).width());
			$('#nav-links-div').css('position', 'absolute');
			$('#nav-links-div').css('margin-left', jumboMargin);
		}
		if (windowWidth < 767) {
			$('#nav-links-div').css('position', 'relative');
			$('#nav-links-div').css('margin-left', 'inherit');
		}
	}

$(document).ready(function() {

	// This forces our nav links to line up neatly with the jumbotron text.
	function moveNavbar() {
		var jumboMargin = $('#main-jumbotron-container').css('margin-left');
		var windowWidth = $(window).width();

		if (windowWidth > 1300) {
			// $('.navbar-nav').css('align-items', 'center');
			$('#nav-links-div').css('position', 'absolute');
			$('#nav-links-div').css('margin-left', jumboMargin);
		}
		if (windowWidth < 767) {
			// $('.navbar-nav').css('align-items', 'flex-start');
			$('#nav-links-div').css('position', 'relative');
			$('#nav-links-div').css('margin-left', 'inherit');
		}
	}

	// moveNavbar fires too soon without setTimeout. No type of "on load" triggers I tried worked. This works half the time when set to zero. Luckily it gets lost in the normal webpage flicker.
	
	setTimeout(function() {
		moveNavbar();
	}, 300);
});