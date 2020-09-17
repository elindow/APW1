$(document).ready(function() {  

const roads = [ "Alice's House-Bob's House", "Alice's House-Cabin", 
				"Alice's House-Post Office", "Bob's House-Town Hall", 
				"Daria's House-Ernie's House", "Daria's House-Town Hall", 
				"Ernie's House-Grete's House", "Grete's House-Farm", 
				"Grete's House-Shop", "Marketplace-Farm", 
				"Marketplace-Post Office", "Marketplace-Shop", 
				"Marketplace-Town Hall", "Shop-Town Hall" ];

    

const roadGraph = buildGraph(roads);
//console.log(roadGraph);

class VillageState { 
  constructor(place, parcels) { 
     this.place = place; 			// location
     this.parcels = parcels; 		// array of parcels
     }
move(destination) { 
   if (!roadGraph[this.place].includes(destination)) {	// just return if not a valid move
      return this; 
   } else { 
      let parcels = this.parcels.map(p => { 			// map parcels array 
         if (p.place != this.place) return p; 			// parcel in transit
         return {place: destination, address: p.address}; 	// add parcel at current location in transit
         }).filter(p => p.place != p.address); 			// remove (deliver) parcels at current address
     return new VillageState(destination, parcels); 	// return new state
      } 
   }
}

//Create new state for each move:
/*  test basic structure
let first = new VillageState( 
   "Post Office", 
   [{place: "Post Office", address: "Alice's House"}]
    ); 
let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);
*/

function runRobot(state, robot, memory) { 	// pass current state, robot, and memory
   for (let turn = 0;; turn++) {			// move parcels
       if (state.parcels.length == 0) { 		// if no parcels left
         //console.log(`Done in ${turn} turns`); 	// done
         //$("#out1").html("Finished: "+`Done in ${turn} turns`);
         return turn;
         break; 					// jump out of turn loop
      } 
   let action = robot(state, memory); 		// create new action for current robot state/mem
   state = state.move(action.direction); 		// new state created by move function
   memory = action.memory; 			// add to memory
   console.log(`Moved to ${action.direction}`); 	// log output
   //return turn;
   } 
}

// random robot
function randomPick(array) { let choice = Math.floor(Math.random() * array.length); return array[choice]; }  // randomly choose an array index
function randomRobot(state) { return {direction: randomPick(roadGraph[state.place])}; }						 // use random index to get random state- i.e. a place

VillageState.random = function(parcelCount = 5) {		// set number of parcels as argument
 let parcels = []; 										// create parcel array
 for (let i = 0; i < parcelCount; i++) {				// run it for 5 parcels
  let address = randomPick(Object.keys(roadGraph)); 	// randomly pick destination address
  let place;											// check parcel isn't already delivered  
   do { place = randomPick(Object.keys(roadGraph)); 	// create random place different from dest.
   } while (place == address); 							// address and place must be different
   parcels.push({place, address}); 						// add to parcels array, where it is and where it is going
} return new VillageState("Post Office", parcels); 		// becomes the state object passed to the robot, with starting place and 
};

//runRobot(VillageState.random(), randomRobot); 			// note no memory, ok to not pass right hand args

// mail truck robot, go twice in sequence around fixed route, must remember where it was in loop
const mailRoute = [ "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", 
					"Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", 
					"Farm", "Marketplace", "Post Office" ];

function routeRobot(state, memory) { if (memory.length == 0) { memory = mailRoute; } return {direction: memory[0], memory: memory.slice(1)}; }
//runRobot(VillageState.random(), routeRobot, memory = []); 

// route finding robot

function findRoute(graph, from, to) { 
	let work = [{at: from, route: []}]; 			// keep a list of possible routes in array at- starting point and path by places
	for (let i = 0; i < work.length; i++) { 		// walk through list
		let {at, route} = work[i]; 					// 
		for (let place of graph[at]) { 				// walk through places
			if (place == to) {
				route = route.concat(place);
				
				return route;
			 } // if at destination return full route
			if (!work.some(w => w.at == place)) { 			// if place not yet visited
				work.push({at: place, route: route.concat(place)}); // push new member of array
			} 
		} 
	} 
}

function goalOrientedRobot({place, parcels}, route) { 
	if (route.length == 0) { 
		let parcel = parcels[0]; 
		if (parcel.place != place) { 
			route = findRoute(roadGraph, place, parcel.place); 
		} else { 
			route = findRoute(roadGraph, place, parcel.address); 
		} 
	} 
	return {direction: route[0], memory: route.slice(1)}; 
}

//runRobot(VillageState.random(), goalOrientedRobot, memory = []);
runRobotAnimation(VillageState.random(), goalOrientedRobot, memory = []);

compareRobots(routeRobot, goalOrientedRobot);

function compareRobots(robot1,robot2) {
	let totals = [0,0];
	let count = 0;
	for (i=0;i<100;i++) {
		totals[0] += runRobot(VillageState.random(), goalOrientedRobot, memory = []);
		totals[1] += runRobot(VillageState.random(), routeRobot, memory = []); 

		}
	$("#out1").html(`Robot1 average done in ${totals[0]/100} turns`);
	$("#out2").html(`Robot2 average in ${totals[1]/100} turns`);
	(totals[0] > totals[1]) ? $("#out3").html("Robot1 is faster!") : (totals[1] > totals[0]) ? $("#out3").html("Robot2 is faster!") : $("#out3").html("They are the same.");
	//console.log(totals[0]/100+"-"+totals[1]/100);
}

});