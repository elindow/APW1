
	var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'earth.jpg';
	images[1] = 'moon.jpg';
	images[2] = 'mars.jpg';
	images[3] = 'jupiter.jpg';
	images[4] = 'venus.jpg';
	images[5] = 'mercury.jpg'

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;

		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
