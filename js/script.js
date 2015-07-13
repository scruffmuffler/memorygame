$(function (){

	/////////////////////////////////
	// VARIABLES
	////////////////////////////////

	var board = $('.board');
	var images = $('.image');
	var score = $('.score');
	var reset = $('#reset');
	var player = true;
	var whoIsPlaying = null;

	var images_array = [
		// "./images/beckham.jpg", "./images/beckham.jpg",
		"./images/dempsey.jpg", "./images/dempsey.jpg",
		"./images/fernandoTorres.jpg", "./images/fernandoTorres.jpg",
		"./images/ibrahimovic.jpg", "./images/ibrahimovic.jpg",
		// "./images/ikerCasillas.jpg", "./images/ikerCasillas.jpg",
		"./images/marcelo.jpg", "./images/marcelo.jpg",
		"./images/messi.jpg", "./images/messi.jpg",
		"./images/neymar.jpg", "./images/neymar.jpg",
		// "./images/parkChuYong.jpg", "./images/parkChuYong.jpg",
		"./images/pique.jpg", "./images/pique.jpg",
		"./images/ronaldo.jpg", "./images/ronaldo.jpg",
		"./images/wayneRooney.jpg", "./images/wayneRooney.jpg",
		"./images/chicharito.jpg", "./images/chicharito.jpg"
	];



	/////////////////////////////////
	// FUNCTIONS
	////////////////////////////////

	function shuffle(images_array){
	    for(var j, x, i = images_array.length; i; j = Math.floor(Math.random() * i), x = images_array[--i], images_array[i] = images_array[j], images_array[j] = x);
	    return images_array;
	}
	var shuffledArray = shuffle(images_array);

	////////////////////////////////////

	$('.playerimg').each(function (index) {
		$(this).attr('src', shuffledArray[index]);
		// console.log(index);
	});
	images.children().hide();

	///////////////SLOAN's FUNCTIONS


	var makeTurnIndicator = function(){
		$("<span/>", {
			class: 'whoseTurn',
			id: 'block' + blockNum,
			blockNum+=1;
		}).appendTo(".buttonsDiv")	
	}
	//////////////

	////////////////////////////////////
	// EventListener
	////////////////////////////////////


	var imageClicked = false;
	var counter = 0;

	images.on('click', function (e) {
		$(this).children().show();
		if(imageClicked){
			//second image
			var imageClicked2 = $(this);
			var previous = $(imageClicked).find('img').attr('src');
			var current = $(imageClicked2).find('img').attr('src');
			if(previous === current && $(imageClicked).attr('class') !== $(imageClicked2).attr('class')){
				counter++;
				if (player) {
					var currentVal = parseInt($('.counter1').text());
					$('.counter1').text(currentVal + 1);

				} else {
					var currentVal = parseInt($('.counter2').text());
					$('.counter2').text(currentVal + 1);
				}
				// console.log('match');
				$(imageClicked).addClass('selected').children().show();
				$(imageClicked2).addClass('selected').children().show();
				imageClicked = false;
				// console.log(imageClicked);
			} else {
				console.log('NO MATCH!!');
				//flip items back
				$(imageClicked).children().fadeOut(1000);
				$(imageClicked2).children().fadeOut(1000);
				imageClicked=false;
				player = !player;
				// console.log('what is this',$(this));
			}

		} else {
			//first image
			imageClicked = $(this);
			// console.log(imageClicked);
		}
		console.log(counter, player);


	});

	reset.on('click', function (e) {
		counter = 0;
		score.html('0');
		$('.playerimg').each(function (index) {
			$('.image').removeClass('selected', shuffledArray[index]);
		// console.log(index);
		});
		images.children().hide();
		// console.log(images);
	});

});
