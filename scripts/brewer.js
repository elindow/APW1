//var myButton = document.querySelector('button');                  // creates button variable for js
//var myHeading = document.querySelector('h1');                     // creates var for h1 style header

//var myImage = document.images["otter.gif"];


function showImage(){
	x=document.getElementById("myImage");
	x.src = "../images/otter.gif"
	alert("here's an otter");

}

var mySound = document.getElementById("mySound");
function togglePlay() {
  return mySound.paused ? mySound.play() : mySound.pause();
};

//function clickButtonStop(){
//	y=document.getElementById("mySound");
//	y.src = "../audio/kirby.mp3"
//	mySound = new sound("kirby.mp3");
//	mySound.pause();
//}


//  
//}
