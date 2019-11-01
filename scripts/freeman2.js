alert("i am programming")
var x = new []; 
var y = new []; 
var gameover=false;
var w=30, h=30, bs=20, dir=2, ax=12, ay=10; 
var []dx={0,0,1,-1},dy={1,-1.0.0};

function setup(){
	creatCanvas(600,600);
	x.add(5);
	y.add(5);
}

function draw(){
	for(int i=0; i<w; i++){
		line(i*bs,0,i*bs,height);
	}
	for(int i=0; i<h; i++){
		line(0,i*bs,width,i*bs);
	}
	fill(0,255,0);
	for (int i=0; i<x.size(); i++){
		rect(x.get(i)*bs, y.get(i)*bs, bs, bs);
	}
  if (!gameover) {  
  	fill(255, 0, 0); 
  rect(ax*bs, ay*bs, bs, bs);
  if (frameCount%5==0) {
      x.add(0, x.get(0) + dx[dir]); 
      y.add(0, y.get(0) + dy[dir]);
      if(x.get(0) < 0 || y.get(0) < 0 || x.get(0) >= w || y.get(0) >= h)
      gameover = true;
      for(int i=1;i<x.size();i++) 
      if(x.get(0)==x.get(i)&&y.get(0)==y.get(i)) 
      gameover=true;
      if (x.get(0)==ax && y.get(0)==ay) { 
      ax = (int)random(0, w); ay = (int)random(0, h);
    }
      else { x.remove(x.size()-1); y.remove(y.size()-1); }
    }
    
  }else {
    fill(0); textSize(30); 
    textAlign(CENTER); 
    text("GAME OVER. Press space",width/2,height/2);
    if(keyPressed&&key==' ') { 
    	x.clear(); y.clear(); x.add(5);  y.add(5); gameover = false; 
    }
  }
}
function keyPressed() { int nd=key=='s'? 0:(key=='w'?1:(key=='d'?2:(key=='a'?3:-1)));
  if (nd!=-1&&(x.size()<=1||!(x.get(1)==x.get(0)+dx[nd]&&y.get(1)==y.get(0)+dy[nd]))) dir=nd;
}
	