var tb;
var a;
function setup(){
	createCanvas(600,600);
	background(0);
	a=PI/6.5;

}
function draw(){
	translate(width/2, height);
	strokeWeight(1);
	stroke(255);
	b(200);
}
function b(tb){
	line (0,0,0,-tb);
	translate(0,-tb);
		if (tb>1){
		push();
		rotate(a);
		b(tb*0.6);
		pop();
		push();
		rotate(-a);
		b(tb*0.6);
		pop();

		}
}