$(document).ready(function(){
	reset();
	clearInterval(gameLoop);
	clearInterval(fadeLoop);

	getSliderValues();
	start();

	// $(".start").on("click", function(event){
	// 	event.preventDefault();
	// 	reset();
	// 	clearInterval(gameLoop);
	// 	clearInterval(fadeLoop);

	// 	getSliderValues();
	// 	start();
	// });

	$(".add-ball").on("click", function(event){
		event.preventDefault();
		updateSettings();
		balls.push(new Ball(force));
	})

	$(".update-settings").on("click", function(event){
		event.preventDefault();
		updateSettings();
	})

	$(".clear").on('click', function(event){
		event.preventDefault();
		reset();
		balls = [];
	})

	$(".quick-add").on("click", function(event){
		event.preventDefault();
		var times = parseInt($(this).attr("balls"));
		var spread = $("#spread").val();
		for(var i = 0; i < times;i++){
			setTimeout(function(){balls.push(new Ball(force))}, spread*i);
		}
	})

})

var getSliderValues = function(){
	gravityModifier = $("#gravity").val();
	dragModifier = $("#drag").val();
	forceModifier = $("#force").val();
	fade = $("#fade").val();

	drag *= dragModifier/15;
	force *= forceModifier/25;
	gravity *= gravityModifier/25;
}

var updateSettings = function(){
	clearInterval(fadeLoop);
	reset();
	getSliderValues();
	fadeLoop = setInterval(fadeOut, fade);
}
