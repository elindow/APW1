Background myBackground;
CentralBody sun;
Object pluto;
float t, dt, scale, rBody, rObject, massBody;
int factor;
Button keplerButton, factButton, sourceButton, plutoButton, slide1Button, slide2Button, slide3Button, diagramButton;
boolean keplerButtonOn, factButtonOn, sourceButtonOn, sunButtonOn, plutoButtonOn, slide1ButtonOn, slide2ButtonOn, slide3ButtonOn, diagramButtonOn;
PImage plutoImg, sunImg, plutoDiagram, slide1, slide2, slide3, sources, kepler, info;

void setup () {
  size(800, 800);  
  myBackground = new Background (800, 800);  

  // Extras
  scale = 2*pow(10, 10);    // ratio of m to px
  factor = 3;

  // Sun Info
  massBody = 1.989*pow(10, 30); 
  rBody = 6.957*pow(10, 8+factor);
  sun = new CentralBody (massBody, rBody, scale);

  // Pluto Info
  rObject = 1.151*pow(10, 6+factor+2);   // pluto
  float degrees = 90;  // this is the initial angle that the object is moving (same as in Simple_Forces)
  float Vi = 4743;      // in m/s
  float Xi = 695;     // in px, use scale to calculate!!
  float Yi = 400;
  pluto = new Object (rObject, sun, scale);          // radius, myBody, initialScale 
  pluto.setInitialConditions (Vi, degrees, Xi, Yi);       // Vi, degrees

  // Images
  info = loadImage("info.png");
  kepler = loadImage("kepler.png");
  plutoImg = loadImage("pluto.png");
  sunImg = loadImage("sun.png");
  slide1 = loadImage("slide1.png");
  slide2 = loadImage("slide2.png");
  slide3 = loadImage("slide2.png");
  plutoDiagram = loadImage("plutodiagram.png");
  sources = loadImage("sources.png");

  // Button
  keplerButtonOn = false;
  factButtonOn = false;
  sourceButtonOn = false;
  sunButtonOn = false;
  slide1ButtonOn = true;
  slide2ButtonOn = false;
  slide3ButtonOn = false;
  diagramButtonOn = false;

  plutoButton = new Button(60, 60);
  plutoButton.setPosition(390, 710);
  plutoButton.setFillColor(60, 63, 66);

  keplerButton = new Button(60, 280);
  keplerButton.setPosition(180, 710);
  keplerButton.setFillColor(16, 50, 87);

  factButton = new Button(60, 280);
  factButton.setPosition(600, 710);
  factButton.setFillColor(68, 51, 89);

  sourceButton = new Button(50, 50);
  sourceButton.setPosition(740, 50);
  sourceButton.setFillColor(134, 163, 179);

  slide1Button = new Button(40, 70);
  slide1Button.setFillColor(68, 51, 89);

  slide2Button = new Button(40, 70);
  slide2Button.setFillColor(68, 51, 89);

  slide3Button = new Button(40, 70);
  slide3Button.setFillColor(68, 51, 89);

  diagramButton = new Button(40, 70);
  diagramButton.setFillColor(68, 51, 89);

  //initializes t, sets dt, and starts the object in motion 
  dt = 10000000;   // in s
  t = 0;        // in s
}

void draw() {
  myBackground.display();
  sun.display();
  pluto.display();
  pluto.moveObject(dt);
  keplerButton.display();
  keplerButton.setText("Kepler's Third Law");
  factButton.display();
  factButton.setText("Facts");
  sourceButton.display();
  plutoButton.display();
  plutoButton.setImage(plutoImg, 50, 50, 5, 5);
  sourceButton.setImage(info, 50, 40, 0, 4);

  // if the sun is clicked the sun image will appear
  if (sunButtonOn) {
    imageMode(CENTER);
    image(sunImg, sun.getXcenter(), sun.getYcenter(), 170, 150);
    imageMode(CORNER);
  } else { // if not clicked then display instructions
    textAlign(CENTER);
    textSize(14);
    fill(255);
    text("click the sun to make the planet images appear", width/2, 760); //sun instrcutions text
    textAlign(LEFT);
  }

  // if pluto button is clicked the pluto image will appear
  if (plutoButtonOn) {
    imageMode(CENTER);
    image(plutoImg, pluto.getXdisplay(), pluto.getYdisplay());
    imageMode(CORNER);
  }

  // if info button is clicked citaions will appear
  if (sourceButtonOn) {
    keplerButtonOn = false;
    factButtonOn = false;
    createContainer(100, 129, 145, sources);
  }

  // if kepler button is clicked the Law and an explanation will appear
  if (keplerButtonOn) {
    sourceButtonOn = false;
    factButtonOn = false;
    createContainer(46, 85, 128, kepler);
  }

  // if fact button is clicked facts about pluto will appear
  if (factButtonOn) {
    
    if (slide1ButtonOn) {
      createContainer(116, 98, 138, slide1);

      // next
      slide2Button.setPosition(600, 615);
      slide2Button.display();
      slide2Button.setText("->");
    } else if (slide2ButtonOn) {
      createContainer(116, 98, 138, slide2);

      // previous and next
      slide1Button.setPosition(200, 615);
      slide1Button.display();
      slide1Button.setText("<-");

      slide3Button.setPosition(600, 615);
      slide3Button.display();
      slide3Button.setText("->");
    } else if (slide3ButtonOn) {
      createContainer(116, 98, 138, slide3);

      // previous and next
      slide2Button.setPosition(200, 615);
      slide2Button.display();
      slide2Button.setText("<-");

      diagramButton.setPosition(600, 615);
      diagramButton.display();
      diagramButton.setText("->");
    } else if (diagramButtonOn) { // display diagram
      createContainer(116, 98, 138, plutoDiagram);

      // previous
      slide3Button.setPosition(200, 615);
      slide3Button.display();
      slide3Button.setText("<-");
    }
  }

  // draw a line along the orbit

  float years;
  years = t/60/60/24/365;
  fill(255);
  textSize(20);
  text("time = " + years + " years", 20, 50);
  text("1 pixel = 2 x 10^10 meters", 20, 75);

  if ((sq(pluto.getXdisplay()-400)+sq(pluto.getYdisplay()-400))<sq((rBody+rObject)/scale)) {
    dt = 0;
  }

  // Time
  t = t + dt;
}

void createContainer(int r, int g, int b, PImage img) {
  rectMode(CENTER);
  noStroke();
  fill(0, 150);
  rect(width/2-5, height/2+5, 600, 500, 10);
  fill(r, g, b);
  rect(width/2, height/2, 600, 500, 10);
  rectMode(CORNER);
  imageMode(CENTER);
  image(img, width/2, height/2);
  imageMode(CORNER);
}


void mousePressed() {
  // when the button is clicked, the value switches
  if (keplerButton.insideButton()) { 
    keplerButtonOn = !keplerButtonOn;
  }
  if (factButton.insideButton()) { 
    factButtonOn = !factButtonOn;
  }
  if (sourceButton.insideButton()) { 
    sourceButtonOn = !sourceButtonOn;
  }
  if (plutoButton.insideButton()) { 
    plutoButtonOn = !plutoButtonOn;
  }
  if (slide1Button.insideButton()) { 
    slide1ButtonOn = true;
    slide2ButtonOn=false;
    slide3ButtonOn=false;
    diagramButtonOn=false;
  }
  if (slide2Button.insideButton()) { 
    slide2ButtonOn = true;
    slide1ButtonOn = false;
    slide3ButtonOn=false;
    diagramButtonOn=false;
  }
  if (slide3Button.insideButton()) { 
    slide3ButtonOn = true;
    slide1ButtonOn = false;
    slide2ButtonOn=false;
    diagramButtonOn=false;
  }
  if (diagramButton.insideButton()) { 
    diagramButtonOn = true;
    slide1ButtonOn = false;
    slide2ButtonOn=false;
    slide3ButtonOn=false;
  }
  if (mouseX > sun.getXcenter()-sun.getR() && mouseX < sun.getXcenter()+sun.getR()
    && mouseY > sun.getYcenter()-sun.getR() && mouseY < sun.getYcenter()+sun.getR()) {
    sunButtonOn = ! sunButtonOn;
  }
}
