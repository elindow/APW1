var myButton = document.querySelector('button');                  // creates button variable for js
var myHeading = document.querySelector('h1');                     // creates var for h1 style header


myButton.onclick = function(){                                   // mouse click calls 'setUserName()' function
  alert("Congrats! You clicked the button! That's all");
}

var num = 0;
function changeImage(){
	if (num == 0){
		document.getElementById("original_image").src="../images/babyelephant.jpg"; 
		num = num + 1;
	}
	else if (num == 1){
		document.getElementById("original_image").src="https://cdn4.vectorstock.com/i/1000x1000/04/43/of-cartoon-turtle-vector-19300443.jpg"; 
		num = num + 1;
	}
	else if (num == 2){
		document.getElementById("original_image").src="http://images.all-free-download.com/images/graphicthumb/mickey_mouse_2_138919.jpg";
		num = num + 1;
	}
	else if (num ==3){
		document.getElementById("original_image").src="https://i.pinimg.com/originals/6c/17/81/6c17818fa66b65c6a3a3530a38a22611.jpg";
		num = 0;
	}
}