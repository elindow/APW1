var context;
var x=100;
var y=200;
var dx=5;
var dy=5;
var myButton = document.querySelector('button');                  // creates button variable for js
var myHeading = document.querySelector('h1');                     // creates var for h1 style header

  function init()
  {
  	context = myCanvas.getContext('2d');
  	setInterval(draw,10);
  }
  function draw()
  {
  	context.clearRect(0,0,500,400);
    context.beginPath();
	context.fillStyle="#0000ff";
	// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	// Boundary Logic
	if( x<=20 || x>=480) dx=-dx; 
	if( y<=20 || y>=380) dy=-dy; 
	x+=dx;
	y+=dy;
  }

  myButton.onclick = function(){                                   // mouse click calls 'setUserName()' function
<<<<<<< HEAD
  alert("Congrats! You clicked the button! That's all");
}

/*
Catcher myCatcher;
=======
  //alert("Congrats! You clicked the button! That's all");
	  init1();
}
  
  
  Catcher myCatcher;
>>>>>>> 302623feef573124b8f9349d7d7033de395d484b
Drop[] drops;  
Timer myTimer;
var backgnd, score, hiScore;
var lose, newHi;

<<<<<<< HEAD
=======
function init1()
  {
  	context = rainCanvas.getContext('2d');
  	setup();
  }

>>>>>>> 302623feef573124b8f9349d7d7033de395d484b
function setup() {
  createCanvas(480, 480);
  score = 0;
  var[] hs = loadvars("hiScore.txt");
  hiScore = Integer.parseInt(hs[0]);
  lose = false;
  newHi = false;
  myCatcher = new Catcher(60);
  drops = new Drop[100];  
  myTimer = new Timer(1000); //create a timer object
  backgnd = 255;
  for (var i = 0; i < drops.length; i++) {  //initialize drops
    drops[i] = new Drop();
  }
  myTimer.startT(); //start the timer
<<<<<<< HEAD
}

function draw() {
=======
  
  setInterval(draw1,10);
}

function draw1() {
>>>>>>> 302623feef573124b8f9349d7d7033de395d484b
  background(backgnd);
  myCatcher.setLocation(mouseX, mouseY);
  myCatcher.display();

  for (var i = 0; i < drops.length; i++) {
    drops[i].move();
    drops[i].display();

    if (myCatcher.catchDrop(drops[i])) {
      drops[i].caught();
      score++;
      if (score > hiScore) {
        hiScore = score;
        var[] nhs = {"" + hiScore};
        savevars("data/hiScore.txt", nhs);
        prvarln(nhs[0]);
        newHi = true;
      }
    }

    if (drops[i].reachedBottom()) {
      lose = true;
      display("You Lose!");
      for (var j = 0; j < drops.length; j++) {
        drops[j].speed = 0;
        drops[j].x = -500;
      }
    }
  }

  if (myTimer.isFinished()) {
    backgnd = (var) random(0, 200);
    myTimer.startT();
  }
  if (!lose) {
    if (score == drops.length) {
      display("You win!");
    } else {
      display("s");
    }
  }
}

function display(var msg) {
  var x = width/10;
  var y = height/10;
  if (msg.equals("s")) {
    msg = "" + score;
  } else {
    x = (var) random(width);
    y = (var) random(height);
  }
  msg = msg + "\nHigh Score: " + hiScore;
  fill(255, 255, 0);
  textSize(20);
  text(msg, x, y);
}

class Catcher {
  var r;   // radius
  var x, y; // location

  Catcher(var tempR) {
    r = tempR;
    x = 0;
    y = 0;
  }

  function setLocation(var tempX, var tempY) {
    x = tempX;
    y = tempY;
  }

  // A function that returns true or false based on
  // if the catcher varersects a raindrop
  var catchDrop(Drop d) {
    // Calculate distance
    var distance = dist(x, y, d.x, d.y); 

    // Compare distance to sum of radii
    if (distance < r + d.r) { 
      return true;
    } else {
      return false;
    }
  }

  function display() {
    stroke(0);
    fill(0, 255, 255);
    ellipse(x, y, r*2, r*2);
  }
}

class Drop {

  var x, y;   // Variables for location of raindrop
  var speed; // Speed of raindrop
  color c;
  var r;     // Radius of raindrop

  Drop() {
    r = 8;                 // All raindrops are the same createCanvas
    x = random(width);     // Start with a random x location
    y = -r*4;              // Start a little above the window
    speed = random(1, 3);   // Pick a random speed
    c = color(50, 100, 150); // Color
  }

  // Move the raindrop down
  function move() {
    // Increment by speed
    y += speed;
  }

  // Check if it hits the bottom
  var reachedBottom() {
    // If we go a little beyond the bottom
    if (y > height + r*4) { 
      return true;
    } else {
      return false;
    }
  }

  // Display the raindrop
  function display() {
    // Display the drop
    fill(c);
    noStroke();
    for (var i = 4; i >= 0; i--) {
      var r2 = r/(i*.75 + 1);
      ellipse(x, y-(i * 1.5 * r2), r2*2, r2*2);
    }
  }

  // If the drop is caught
  function caught() {
    // Stop it from moving by setting speed equal to zero
    speed = 0; 
    // Set the location to somewhere way off-screen
    y = -1000;
  }
}

class Timer {

  var startTime; // When Timer started
  var totalTime; // How var Timer should last

  Timer(var tempTotalTime) {
    totalTime = tempTotalTime;
  }

  // Starting the timer
  function startT() {
    // When the timer starts it stores the current time in milliseconds.
    startTime = millis();
  }

  // The function isFinished() returns true if totalTime (in ms) have passed. 
  // The work of the timer is farmed out to this method.
  var isFinished() { 
    // Check how much time has passed
    var passedTime = millis()- startTime;
    if (passedTime > totalTime) {
      return true;
    } else {
      return false;
    }
  }
}
<<<<<<< HEAD
*/
=======
  
>>>>>>> 302623feef573124b8f9349d7d7033de395d484b
