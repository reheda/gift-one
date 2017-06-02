$(".mobile-menu").click(function() {
	$(this).toggleClass("on");
	$(".main-menu").slideToggle();
	return false;
});