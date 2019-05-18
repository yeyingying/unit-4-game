
var random_result;
var lost = 0;
var win = 0;
var previous = 0;
var win_msg = "You Win!!"
var lose_msg = "You Lose!!"

var resetAndStart = function () {
	$(".crystals").empty();

	var images = [
		'assets/images/gem1.png', 
		'assets/images/gem2.png', 
		'assets/images/gem3.png', 
		'assets/images/gem4.png'
	];
		
	random_result = Math.floor(Math.random() * 101 ) + 19; 

	$("#result").html('Target : ' + random_result);

	for(var i = 0; i < 4; i++){
		var random = Math.floor(Math.random() * 11) + 1;
		var crystal = $("<div>");

		crystal.attr({
			"class": 'crystal',
			"data-random": random
		});
			
		crystal.css({
			"background-image":"url('" + images[i] + "')",
			"background-size":"cover"
		});

		$(".crystals").append(crystal);
	}

	$("#previous").html("Your Score: " + previous);

}

resetAndStart();

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html("Your Score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("Lost: " + lost);
		$("#result_msg").html(lose_msg);
		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("Win: " + win);
		$("#result_msg").html(win_msg);
		previous = 0;

		resetAndStart();

	}

});


