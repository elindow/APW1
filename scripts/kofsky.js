var context;
var x=100;
var y=200;
var x2 = 30;
var y2 = 300;
var dx=5;
var dy=5;
  function init()
  {
  	context = myCanvas.getContext('2d');
  	setInterval(draw,10);
  }
  function draw()
  {
  	context.clearRect(0,0,800,600);
    context.beginPath();
	context.fillStyle="#C1A2E0";
	// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
	 $("#SButton1").click(function() {  										// assign click() function to button using button id
		alert("Lindow button clicked");	
		$context.arc(x,y,20,0,Math.PI*2,true);
		$context.closePath();
		$context.fill();
		$context.arc(x2,y2,20,0,Math.PI*2,true);
		$context.closePath();
		$context.fill();									// call alert just for testing purposes
		//$("#SButton1").html("I was clicked");								// change the button lable, or do whatever you want
	});		
	
	// Boundary Logic
	if( x<=20 || x>=480) dx=-dx; 
	if( y<=20 || y>=380) dy=-dy; 
	x+=dx;
	y+=dy;
	x2 -= dx;
	y2 += dy;
  }