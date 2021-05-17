jQuery(document).ready(function () {
	//Navbar right
	$(".i-control").click(function () {
		$(".anchor").toggleClass("open");
		$(this).toggleClass("i-control-open"); // active bg btn
	});

	//Img error
	$("img").on("error", function () {
		$(this).attr("src", "./assets/images/missing.png");
	});
});
