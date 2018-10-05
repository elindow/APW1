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
  alert("Congrats! You clicked the button! That's all");
}