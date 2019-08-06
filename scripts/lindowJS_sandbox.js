let rabbit = {}; 					// instantiate empty object
rabbit.speak = function(line) { 			// add new method
$("out2").html(`The rabbit says '${line}'`);   // note ‘${…} to insert var inside string
};

 
function speak(line) { 
	$("out2").html(`The ${this.type} rabbit says '${line}'`); 
} 

let whiteRabbit = {type: "white", speak}; 
let hungryRabbit = {type: "hungry", speak};



$("#LButton1").click(function() {  										// assign click() function to button using button id
		//alert("Lindow button clicked");										// call alert just for testing purposes
	rabbit.speak("I'm alive.");	
	whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"); 
	hungryRabbit.speak("I could use a carrot right now."); 

		$("#LButton1").html("I was clicked");								// change the button lable, or do whatever you want
	});		