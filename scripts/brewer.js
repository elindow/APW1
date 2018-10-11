//var myButton = document.querySelector('button');                  // creates button variable for js
//var myHeading = document.querySelector('h1');                     // creates var for h1 style header

//var myImage = document.images["otter.gif"];
var mySound;

function showImage(){
	x=document.getElementById("myImage");
	x.src = "../images/otter.gif"
	alert("here's an otter");

}

function clickButton(){
	y=document.getElementById("mySound");
	y.src = "../audio/kirby.mp3"
	mySound = new sound("kirby.mp3");
	mySound.play();


}


//  
//}
