let num = 4 
let randomR = Math.floor(Math.random() * num);
let button = document.body.getElementById("button");

// let Jasonsucks
// type="button" onclick= roast();

console.log(randomR);

button.addEventListener(clicked, "roast");
function roast(){
	if (randomR==0) {
		alert('You are smart if clicked here!')
	}else if(randomR == 1){
		alert('Jason will not get into MIT') 
	}
}