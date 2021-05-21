class Background {
  int screenWidth, screenHeight;
  PImage galaxy;

  Background (int screenWidth, int screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    galaxy = loadImage("galaxy.jpeg");
  }

  void display() {
    background (0);
    image(galaxy, -100, 0, width*1.5, width);
  }
}    
