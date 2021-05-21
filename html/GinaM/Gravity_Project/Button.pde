class Button {
  float buttonHeight, buttonWidth, x, y, textSize, textPixels;
  int rFill, gFill, bFill, rStroke, gStroke, bStroke, rText, gText, bText;
  PFont f;
  color c;

  Button (float buttonHeight, float buttonWidth) {
    this.buttonHeight = buttonHeight;   
    this.buttonWidth = buttonWidth;
  }

  void setPosition(float x, float y) {
    this.x = x;
    this.y = y;
  }    

  void setFillColor(int r, int g, int b) {
    this.c = color(r, g, b);
  } 

  void setStrokeColor(int red, int green, int blue) {
    rStroke = red;
    gStroke = green;
    bStroke = blue;
  } 

  boolean insideButton () {
    return (mouseX < x+buttonWidth/2 &&  mouseX > x-buttonWidth/2 && mouseY < y+buttonHeight/2 && mouseY > y - buttonHeight/2);
  }

  void setText(String text) {
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(text, x, y+10);
    textAlign(CORNER);
  }


  void setImage(PImage img, int w, int h, int xAdj, int yAdj) {
    // adds image to the button
    img.resize(w, h);
    image(img, x-buttonWidth/2+xAdj, y-buttonHeight/2+yAdj);
  }

  void display() {
    // shadow
    rectMode(CORNER);
    noStroke();
    fill(0, 100);
    rect(x-buttonWidth/2-4, y-buttonHeight/2+4, buttonWidth, buttonHeight, 4);

    // button
    fill (c, 255);
    rect(x-buttonWidth/2, y-buttonHeight/2, buttonWidth, buttonHeight, 4);
  }
}
