var x;
var y;
var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
vector.unproject( camera );
var dir = vector.sub( camera.position ).normalize();
var distance = - camera.position.z / dir.z;
var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );

var r= 200, g=100, b=100;

function setup(){
 createCanvas(800,800,WEBGL);
 
  x = (mouseX)-800;
  y = (mouseY)-800;

  document.body.style.backgroundColor = "black";
function onMouseMove( event ) {

    if ( scope.enabled === false ) return;

    event.preventDefault();

    
    
    function onMouseMove(event) {

    // Update the mouse variable
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Make the sphere follow the mouse
    mouseMesh.position.set(event.clientX, event.clientY, 0);
};

  }

  
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

 translate(x-400, y-400, 0);
 sphere(50);

 r = y+x;
 g = y -100;
 b = y -10;
 if(mouseX >500){
 r= y-(y-50);
 g = x-(y-50);
 
 }
 


  x = mouseX;
  y = mouseY;
 
  if(  mouseIsPressed == true){
 setup();
 }

}
