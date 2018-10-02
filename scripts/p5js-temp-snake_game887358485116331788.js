var numCircle = 0;
var numCircle2 = 0;
var buttonPressed = false;
var buttonPressed2 = false;
var mouseClickedd = false;
var mouseMovedd = false;
var t = 0;
function setup() {
  //fill(180,243,255);
  createCanvas(640, 480);
  // var numCircle = 0;
}

function draw() {
  
  if(buttonPressed2 == true){
    noStroke();
    fill(random(0,150), random(0, 10), random(100, 200));
    ellipse(mouseX,mouseY,30,30);
  }
  
  if (buttonPressed == false && t ==0) {
    fill(250);
    stroke(0);
    rect(20, 20, 50, 20);
    fill(0);
    text("Droplets", 23, 32);
  }
  if (buttonPressed2 == false && t ==0) {
    fill(250);
    stroke(0);
    rect(20, 50, 50, 20);
    fill(0);
    text("Drag", 23, 62);
  }
  if (buttonPressed == true) {
    if (numCircle < 8000) {
      stroke(255, 255, 255);
      fill(0, random(0, 150), random(100, 200));
      ellipse(random(0, 640), random(0, 480), 10, 10);
      fill(0, random(0, 150), random(100, 200));
      ellipse(random(0, 640), random(0, 480), 10, 10);

      numCircle = numCircle + 2;
    }
    if (numCircle >= 8000) {
      stroke(255, 255, 255);
      fill(255);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);
      ellipse(random(0, 640), random(0, 480), 10, 10);

      numCircle2 = numCircle2 + 2;
    }
    if (numCircle2 >8000) {
      numCircle = 0;
      numCircle2 = 0;
    }
  }
  t = 0.01 +t;
  
  if(mouseClickedd){
    
     if ((mouseX<70) && (mouseX>20)) {
      if((mouseY<40) && (mouseY>20)){
        buttonPressed = true;
        fill(255);
        stroke(255);
        rect(20, 20, 73, 83);
        //text("YAY", 60,60);
    }
    if ((mouseX<70) && (mouseX>20)) {
      if((mouseY<70) && (mouseY>50)){
        buttonPressed2 = true;
        fill(255);
        stroke(255);
        rect(20, 20, 73, 83);
        //text("YAY", 60,60);
    }
   
  }
  mouseClickedd = false;
  }
}
}
function mouseClicked() {
  
   mouseClickedd = true;
   if(buttonPressed2){
     background(255);
   }
 
}
