let num = 4 
// let button = document.getElementById("button");

// let Jasonsucks
// type="button" onclick= roast();

document.getElementById("newbutton").addEventListener("click", roast);
function roast(){
	let randomR = Math.floor(Math.random() * num);

	if(randomR == 0){
		alert("Jackson Hole");
	}
	else if(randomR == 1){
		alert("Atomics are the best");
	}
	else if(randomR == 2){
		alert("Backcountry");
	}
	else if(randomR == 3){
		alert("Tram");
	}
	// if (randomR==0) {
	// 	alert('You are smart if clicked here!')
	// }else if(randomR == 1){
	// 	alert('Jason will not get into MIT') 
	// }
}