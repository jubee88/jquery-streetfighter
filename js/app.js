$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		//play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		.animate(
			{"left": "300"},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "551px");
			}
			);
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//ryu to go back to ready
	});
});