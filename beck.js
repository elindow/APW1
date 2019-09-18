var x;
var y;

var r= 100, g=100, b=100;

function setup(){
  x = mouseX ;
  y = mouseY;
  background(0);

  createCanvas(800,800,WEBGL);
 // ellipse(x,y,50,50);
 //translate(x, y, 0);
 // sphere(50)

}

function draw(){
   //background(255);
    //fill(r,g,b);
  //ellipse(x,y,50,50);
 
noStroke();
lights();
fill(r,g,b);

translate(x, y, 0);
sphere(50);

 r = y+x;
 g = y -100;
 b = y -10;
 if(mouseX >255){
 r= y-(y-50);
 g = x-(y-50);
 
 }
 


  x = mouseX;
  y = mouseY;
 
  if(  mouseIsPressed == true){
setup();
 }

}
