let num = 4 
// let button = document.getElementById("button");

// let Jasonsucks
// type="button" onclick= roast();

document.getElementById("newbutton").addEventListener("click", roast);
function roast(){
	let randomR = Math.floor(Math.random() * num);

	if(randomR == 0){
		alert("Jason won't get into MIT");
	}
	else if(randomR == 1){
		alert("Jason has stupid hair");
	}
	else if(randomR == 2){
		alert("Jason sucks at Overwatch");
	}
	else if(randomR == 3){
		alert("Jason has a terrible fashion sense");
	}
	// if (randomR==0) {
	// 	alert('You are smart if clicked here!')
	// }else if(randomR == 1){
	// 	alert('Jason will not get into MIT') 
	// }
}