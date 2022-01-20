class Cloud {
  float x, y, w, h, s; // properties of clouds

  Cloud(float tempX, float tempY, float tempW, float tempH) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    s = 0.5; // speed of cloud movement
  }

  void display() {
    // Create cloud
    noStroke();
    fill(255, 150);
    ellipse(x, y, w, h);
  }

  // Cloud moves based on speed, s
  void move() {
    x += s;
    if (x > width + w/2) {
      x = 0 - w/2; // reset x-location of cloud when it goes out of the window
    }
  }
}
