 

	

$(document).ready(function() {  										 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").html("JQuery is working");								  	// adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	  	// # at front of object indicates id, function to be called comes after . 

    $("#LButton1").click(function() {  										// assign click() function to button using button id
		alert("Josie button clicked");										// call alert just for testing purposes
		$("#LButton1").html("I was clicked");								// change the button lable, or do whatever you want
	});																		// note how much cleaner the code is compared to below

    //var LindowButton = document.querySelector('button'); 					//this code selects the first (and in this case only) button on the page
	//LindowButton.onclick = function() {  
	//       alert("Lindow button clicked");                                // mouse click calls 'setUserName()' function
	//}



	// end of jQuery block
});

		
//function setup() {
//	createCanvas(300,800);
//}

//function draw() {
//	if (mouseIsPressed) {
//    fill(0);
//  } else {
//    fill(255);
//  }
// ellipse(mouseX, mouseY, 10, 10);
//}

/**
 * This example can be found in the Processing examples package
 * that comes with the Processing PDE.
 * Processing > Examples > Topics > Interaction > Follow3
 * Adapted by Evelyn Eastmond
 */

var x = new Array(20);  // **change** float[] x = new float[20] to new Array(20)
var y = new Array(20);  // **change** float[] y = new float[20] to new Array(20)
var segLength = 30;              
var sr = 0;
var sg = 0;
var sb = 0;                   // **change** float to var

function setup() {                          // **change** void setup() to function setup()
  createCanvas(640, 360);                   // **change** size() to createCanvas()
  strokeWeight(9);                          // strokeWeight() is the same
  stroke(255, 100);                         // stroke() is the same
  for(var i=0; i<x.length; i++) {         // initialize the array
    x[i]=0;
    y[i]=0;
  }
}

function draw() {                           // **change** void draw() to function draw()
  background(0);  
  if (mouseIsPressed) {                      // background() is the same
  drawSegment(0, mouseX, mouseY);           // functions calls, mouseX and mouseY are the same
  for(var i=0; i<x.length-1; i++) {         // **change** int i to var i
    drawSegment(i+1, x[i], y[i]);           // function calls are the same
  }
}
}

function drawSegment(i, xin, yin) {         // **change** void drawSegment() to function drawSegment(), remove type declarations
  var dx = xin - x[i];                      // **change** float to var
  var dy = yin - y[i];                      // **change** float to var
  var angle = atan2(dy, dx);                // **change** float to var, atan2() is the same
  x[i] = xin - cos(angle) * segLength;      // cos() is the same
  y[i] = yin - sin(angle) * segLength;      // sin() is the same
  segment(x[i], y[i], angle);               // function calls are the same
}

function segment(x, y, a) {                 // **change** void segment() to function segment(), remove type declarations
  push();                            		// pushMatrix() becomes push()
  translate(x, y);                          // translate() is the same
  rotate(a);              
  sr = random(255);
  sg = random(255);
  sb = random(255);
  stroke(sr,sg,sb);                  // rotate() is the same
  line(0, 0, segLength, 0);                 // line() is the same
  pop();                              		// popMatrix() becomes pop()
}
