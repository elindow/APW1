let rabbit = {}; 					// instantiate empty object
rabbit.speak = function(line) { 			// add new method
alert(`The rabbit says '${line}'`);   // note ‘${…} to insert var inside string
};

rabbit.speak("I'm alive."); 
