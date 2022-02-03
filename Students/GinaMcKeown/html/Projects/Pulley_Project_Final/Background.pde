class Background {
  Cloud[] clouds;
  PImage sign, rock1, rock2, rock3, rocks;
  color c;

  Background () {
    // create clouds
    clouds = new Cloud[8];
    clouds[0] = new Cloud(50, 100, 90, 40);
    clouds[1] = new Cloud(120, 80, 150, 70);
    clouds[2] = new Cloud(180, 90, 80, 30);
    clouds[3] = new Cloud(270, 180, 110, 50);
    clouds[4] = new Cloud(330, 160, 150, 70);
    clouds[5] = new Cloud(420, 180, 110, 50);
    clouds[6] = new Cloud(520, 110, 120, 60);
    clouds[7] = new Cloud(580, 120, 90, 40);
    
    // Load Images
    sign = loadImage("construction-sign.png");
    rock1 = loadImage("rock1.png");
    rock2 = loadImage("rock2.png");
    rock3 = loadImage("rock3.png");
  }

  void display() {
    background (c);

    // display clouds + sun in background
    for (int i = 0; i < clouds.length; i++) {
      clouds[i].display();
      clouds[i].move();
    }

    // senery + rocks
    rectMode(CORNER);
    fill(138, 100, 54);
    rect(0, 500, width, 200);
    image(rock1, 570, 525);
    image(rock2, 540, 585);
    image(rock3, 480, 540);
    image(sign, 550, 370);
  }

  void setColor(color c) {
    this.c=c;
  }
}    
