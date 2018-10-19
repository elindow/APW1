var x;
var y;

var r= 100, g=100, b=100;

function setup(){
 createCanvas(800,800,WEBGL);
 
 x = (mouseX)+ 1600;
 y = (mouseY)+1600;

  document.body.style.backgroundColor = "black";

  
 // ellipse(x,y,50,50);
 //translate(x, y, 0);
 // sphere(50)

}

function draw(){
   //background(255);
    //fill(r,g,b);
  //ellipse(x,y,50,50);
 
  noStroke();
  pointLight(0,164,178,40,49,250);
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
