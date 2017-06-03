$("header .mobile-menu").click(function() {
	$(this).toggleClass("on");
	$("header .main-menu").slideToggle();
	return false;
});

$("footer .mobile-menu").click(function() {
	$(this).toggleClass("on");
	$("footer .main-menu").slideToggle();
	return false;
});