class Button {
  float buttonHeight, buttonWidth, x, y, textSize, textPixels;
  int rFill, gFill, bFill, rStroke, gStroke, bStroke, rText, gText, bText;
  PFont f;
  color c;

  Button (float buttonHeight, float buttonWidth) {
    this.buttonHeight = buttonHeight;   
    this.buttonWidth = buttonWidth;
    textSize = buttonHeight*2/3;
    textPixels = 0.7479*textSize - 0.0318;
    f = createFont("Arial", textSize, true);
  }

  void setPosition(float x, float y) {
    this.x = x;
    this.y = y;
  }

  void setColor (int rStroke, int gStroke, int bStroke, color c) {
    setFillColor(c);
    setStrokeColor (rStroke, gStroke, bStroke);
  }    

  void setFillColor(color c) {
    this.c = c;
  } 

  void setStrokeColor(int red, int green, int blue) {
    rStroke = red;
    gStroke = green;
    bStroke = blue;
  } 

  boolean insideButton () {
    return (mouseX < x+buttonWidth/2 &&  mouseX > x-buttonWidth/2 && mouseY < y+buttonHeight/2 && mouseY > y - buttonHeight/2);
  }

  void display() {
    // shadow
    rectMode(CORNER);
    noStroke();
    fill(0, 40);
    rect(x-buttonWidth/2-4, y-buttonHeight/2+4, buttonWidth, buttonHeight, 10);
    
    // button
    fill (c, 255);
    rect(x-buttonWidth/2, y-buttonHeight/2, buttonWidth, buttonHeight, 10);
  }

  void setImage(PImage img) {
    // adds image to the button
    img.resize(50, 50);
    image(img, x-buttonWidth/2+5, y-buttonHeight/2+5);
  }
}
