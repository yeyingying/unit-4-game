var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'assets/images/gem1.png', 
			'assets/images/gem2.png', 
			'assets/images/gem3.png', 
			'assets/images/gem4.png'];
		
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


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Your Score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("Lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("Win: " + win);

		previous = 0;

		resetAndStart();

	}

});


// Speudo coding

// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystals
