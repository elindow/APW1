let rabbit = {}; 					// instantiate empty object
rabbit.speak = function(line) { 			// add new method
alert(`The rabbit says '${line}'`);   // note ‘${…} to insert var inside string
};

rabbit.speak("I'm alive."); 

function speak(line) { 
	console.log(`The ${this.type} rabbit says '${line}'`); 
} 

let whiteRabbit = {type: "white", speak}; 
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"); 
hungryRabbit.speak("I could use a carrot right now."); 