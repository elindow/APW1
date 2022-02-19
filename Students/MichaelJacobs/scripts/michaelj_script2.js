var canvas = document.getElementById("myCanvas");
var colors = "52489c-4062bb-59c3c3-ebebeb-f45b69".split("-").map(a=>"#"+a)
function setup() {
  createCanvas(800, 800);
  background(200);
  fill(30)
  rect(0,0,width,height)
  noStroke()
  
  drawingContext.shadowColor = color(0, 0, 0,30);
  drawingContext.shadowBlur =20;
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
}

function draw() {
  translate(width/2,height/2)
  let cSpan = 100
  let c1 = (int(frameCount/cSpan))% 5
  let c2 = (int(frameCount/cSpan)+1) % 5
  let ratio = (frameCount/cSpan-int(frameCount/cSpan))
  strokeWeight(2)
  for(var i=0;i<50;i++){
    push()
    fill(lerpColor( color(colors[c1]),color(colors[c2]), ratio ))
    rotate(frameCount/(50+10*log(frameCount))+i/20)
    let dd = frameCount/(5+i)+frameCount/5+sin(i)*50
    translate( random(dd/2,dd),0)
    
    let x = noise(frameCount/50+i/50,5000)*80 + random(50)
    let y = noise(frameCount/50+i/50,10000)*80 + random(50)
    
    let rr =random(1,8-log(frameCount)/10)
    ellipse(x,y,rr*2,rr*4)
    pop()
  }
}