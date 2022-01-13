class Textbox {
  // textbox
  float x;
  float y;
  float w;
  float h;
  int curve;
  color c;
  boolean pressed;

  // text
  String inputMass;
  float mass;
  float textX, textY, inputWidth;

  // enter button
  Button enter;
  PImage enterImg;
  color enterC;
  boolean enterPressed;
  boolean reset;

  Textbox(float tempx, float tempy, float tempw, float temph, int tempcurve, color tempc) {
    // set textbox variables
    x = tempx;
    y = tempy;
    w = tempw;
    h = temph;
    curve = tempcurve;
    c = tempc;
    pressed = false;

    // text 
    textX = x - w/2 + 15;
    textY = y + h/2 - 17;
    inputMass = "";
    inputWidth = 0;

    // enter/reset button
    enter = new Button(60, 60);
    enterC = color(94, 133, 90);
    enterPressed = false;
    reset = false;

    // mass
    mass = 0;
  }

  void display() {
    // shadow
    noStroke();
    fill(0, 40);
    rectMode(CENTER);
    rect(x - 4, y + 4, w, h, curve);

    // button
    fill(c);
    rect(x, y, w, h, curve);

    // Display typed text
    fill(0);
    textSize(25);
    text(inputMass, textX, textY); // input

    // Display text cursor after the typed characters once the textbox has been clicked on
    if (pressed) {
      if (frameCount % 80 >= 0 && frameCount % 80 <= 25) { // appears in certain time frame
        strokeWeight(1);
        stroke(0);
        line(inputWidth + textX, textY + 5, inputWidth + textX, textY - 28);
        noStroke();
      }
    }

    inputWidth = textWidth(inputMass);
    // switch between enter and reset button images
    if (enterPressed) {     
      //replay button
      enterImg = loadImage("replay.png");
      
      // Instructions
      fill(255);
      textSize(17);
      text("Press the button to restart", 40, 630);
    } else {
      // enter button
      enterImg = loadImage("arrow.png");
      mass = float(inputMass);
      
      // Instructions
      fill(255);
      textSize(17);
      text("Press the button or hit enter to submit", 40, 630);
    }

    // display enter/reset button
    enter.setColor(94, 133, 90, enterC);
    enter.setPosition(x+w/2+55, y);
    enter.display();
    enter.setImage(enterImg);

    // display instructions
  }

  void hover() {
    // darken color when mouse hovers over text box
    if (mouseX >= x - w/2 && mouseX <= x + w/2 
      && mouseY >= y - h/2 && mouseY <= y + h/2) {
      rectMode(CENTER);
      fill(0, 50);
      rect(x, y, w, h, curve);
    }
  }

  void keyPressed() {
    // checks whether textbox as been clicked
    if (pressed) {
      if (key == 8 && inputMass.length() > 0) { // if there delete is pressed and there is something written
        // the string becomes 1 character smaller
        inputMass = inputMass.substring(0, inputMass.length()-1);
      } else {
        if (inputWidth < w - 50) { // type within textbox only
          // Each character typed by the user is added to the end of the string variable
          inputMass = inputMass + key;
        }
      }
    }

    // switch between enter and reset buttons when enter key is pressed
    if (key == ENTER && !enterPressed) {
      enterPressed = true;
    } else if (key == ENTER && enterPressed) {
      reset();
    }
  }

  void mousePressed() {
    // checks whether textbox as been clicked
    if (mouseX >= x - w/2 && mouseX <= x + w/2 
      && mouseY >= y - h/2 && mouseY <= y + h/2) {
      pressed = true;
    } else {
      pressed = false;
    }

    // switch between enter and reset buttons when enter key is pressed
    if (enter.insideButton() && !enterPressed) {
      enterPressed = true;
    } else if (enter.insideButton()) {
      enterPressed = false;
      reset();
    }
  }

  void reset() {
    // reset values
    textX = x - w/2 + 15;
    textY = y + h/2 - 17;
    inputMass = "";
    reset = true;
  }

  float getMassInput() {
    return mass;
  }

  boolean enterPressed() {
    return enterPressed;
  }

  boolean resetPressed() {
    return reset;
  }
}
