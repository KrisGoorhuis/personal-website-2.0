
(function() {
	var app = angular.module('personalWebsiteApp', ['nav-directives', 'main-controllers']);

})();

$(document).ready(function() {


	function dataToggle() {
		let windowWidth = $(window).width();
		if (windowWidth > 767) {

		} 
	}


	// This forces our nav links to line up neatly with the jumbotron text.
	function moveNavbar() {
		var jumboMargin = $('#main-jumbotron-container').css('margin-left');
		let windowWidth = $(window).width();

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

	// moveNavbar fires too soon without setTimeout. No type of "on load" triggers I tried worked. This works half the time when set to zero. For now it just gets lost in the normal webpage flicker.
	setTimeout(function() {
		moveNavbar();
	}, 300);

	$(window).on('resize', function() {
		moveNavbar();

	})
});