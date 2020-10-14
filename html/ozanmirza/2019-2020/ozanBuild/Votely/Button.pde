class Button {
  float x;
  float y;
  float w;
  float h;
  int curve;
  color c;
  boolean pressed;
  Callable page;

  Button(float tempx, float tempy, float tempw, float temph, int tempcurve, color tempc) {
    x = tempx;
    y = tempy;
    w = tempw;
    h = temph;
    curve = tempcurve;
    c = tempc;
    pressed = false;
  }

  void display(PImage icon) {
    noStroke();
    if (mouseX >= x - w/2 && mouseX <= x + w/2
      && mouseY >= y - h/2 && mouseY <= y + h/2
      && mousePressed) {
      // shadow
      fill(0, 40);
      rectMode(CENTER);
      rect(x - 4, y + 4, w, h, curve);
    }

    // button
    fill(c);
    rectMode(CENTER);
    rect(x, y, w, h, curve);
    image(icon, x - 25, y - 25);
  }

  void hide() {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
  }

  void display() {
    noStroke();
    if (mouseX >= x - w/2 && mouseX <= x + w/2
      && mouseY >= y - h/2 && mouseY <= y + h/2
      && mousePressed) {
      // shadow
      fill(0, 40);
      rectMode(CENTER);
      rect(x - 4, y + 4, w, h, curve);
    }

    // button
    fill(c);
    rectMode(CENTER);
    rect(x, y, w, h, curve);
  }

  void hover() {
    if (mouseX >= x - w/2 && mouseX <= x + w/2
      && mouseY >= y - h/2 && mouseY <= y + h/2) {
        fill(0, 50);
        rect(x, y, w, h, curve);
      }
  }

  void pressed(Callable success) {
    if (mouseX >= x - w/2 && mouseX <= x + w/2 && mouseY >= y - h/2 && mouseY <= y + h/2 && mousePressed && currentPage == this.page) {
      success.callback();
    }
  }

  void activate() {
    pressed = mouseX >= x - w/2 && mouseX <= x + w/2 && mouseY >= y - h/2 && mouseY <= y + h/2 && mousePressed;
  }
}
