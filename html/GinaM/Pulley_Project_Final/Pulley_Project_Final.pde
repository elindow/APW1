Background background;
Object m1, m2;
Textbox inputMassTextbox;

// Time
float t, dt; // time

// Object 1 (platform)
float Xi, Vxi, Yi, Vyi, mass1, W1, T, Fk, Fn, mk, a;  

// Object 2 (suspended)
float Xi2, Yi2, W2;

// Sets independent variable (mass)
float mass2;
boolean hasInitialized;

// Images
PImage truck, rock, sun, moon, sunB, moonB, ropeH, ropeV, pulley, bridge;

// Day/night Button
Button darkModeB;
boolean darkModePressed;
color day, night;
float buttonX, buttonY;

void setup () {
  size(700, 650);  
  background = new Background ();  

  // set background colors
  day = color(112, 174, 179);
  night = color(66, 79, 97);

  // Load images
  truck = loadImage("truck.png");
  rock = loadImage("rock.png");
  sun = loadImage("sun.png");
  moon = loadImage("moon.png");
  sunB = loadImage("sunB.png");
  moonB = loadImage("moonB.png");
  ropeH = loadImage("rope-horizontal.png");
  ropeV = loadImage("rope-vertical.png");
  pulley = loadImage("pulley.png");
  bridge = loadImage("bridge.png");

  // Booleans
  hasInitialized = false;

  // Initializes t, sets dt 
  t = 0;    
  dt = 0.02;

  // Set up Dark Mode button
  buttonX = 70;
  buttonY = 570;
  darkModeB = new Button(60, 60); // height, text
  darkModeB.setColor (250, 0, 250, day); // stroke, fill, text colors
  darkModeB.setPosition(buttonX, buttonY);
  darkModePressed = false;

  // Input box
  inputMassTextbox = new Textbox(buttonX+130, buttonY, 150, 60, 10, color(255));
}


void draw() {
  // Background
  background.display();
  image(bridge, -400, 7);
  displayDarkModeButton();

  // Mass User Input Textbox
  inputMassTextbox.display();
  inputMassTextbox.hover();

  // If user sumbits a number, set the second mass and start the program
  if (inputMassTextbox.enterPressed()) { 
    initialize(inputMassTextbox.getMassInput());
    hasInitialized = true;
  }

  if (hasInitialized) {  
    //m2.setMass(inputMassTextbox.getMassInput());
    // Calculate Object Forces
    m1.calculatePosition(t);
    m2.calculatePosition(t);

    // Display rope + pulley + bridge
    image(ropeH, m1.getX(), m1.getY()-40, 500-m1.getX(), 80);
    image(ropeV, 430, 210, 100, m2.getY()-200);
    image(pulley, 390, 180);
    image(bridge, -400, 7);

    // Display Objects
    m1.display();
    m2.display();

    // stop if object goes over
    t = t+dt; // time passes

    // Text output for variables
    fill(255);
    textAlign(LEFT);
    textSize(16);
    int spacing = 22; // spaicng between text
    text ("Ax = " + String.format("%.3f", m1.Ax) +" m/s^2", 15, 25);
    text ("mass1 = " + m1.getMass() + "kg", 15, 25 + spacing*1);
    text ("mass2 = " + m2.getMass() + "kg", 15, 25 + spacing*2);
    text ("mk = " + mk , 15, 25 + spacing*3);
    text ("tension = " + T + "N", 15, 25 + spacing*4);

    // object doesn't go over the bridge
    if (m1.X >= 400) {
      // time stops
      dt = 0;
    }
    println(m1.X);
  }

  // Reset
  if (inputMassTextbox.resetPressed()) {
    reset();
  }
}


void mousePressed() {
  // when the button is clicked, the value switches
  if (darkModeB.insideButton()) { 
    darkModePressed = !darkModePressed;
  }
  inputMassTextbox.mousePressed();
}


void keyPressed() {
  inputMassTextbox.keyPressed();
}


void reset() {
  // reset program to beginning
  t = 0; // time restarts

  m1.reset(); // coordinates reset
  m2.reset(); // coordinates reset

  inputMassTextbox.reset = false;
  hasInitialized = false;
}


void displayDarkModeButton() {
  // Dark Mode Button
  darkModeB.display();
  if (darkModePressed) { // night mode, day button
    // set night background
    background.setColor(night);
    image(moon, width/4*3, 10);

    // set day button
    darkModeB.setFillColor(day);
    darkModeB.setImage(sunB);
  } else { // day mode, night button
    // set day background
    background.setColor(day);
    image(sun, width/4*3, 10);

    // set night button
    darkModeB.setFillColor(night);
    darkModeB.setImage(moonB);
  }
}


// Calculations Begin
void initialize(float inputMass) {
  // time starts
  dt = 0.02;

  // Set constants
  float gravity = 10;
  mk = 0.25; // coefficent of kinetic friction
  mass1 = 20;
  mass2 = inputMass; // independent variable

  // Calculations
  W1 = mass1*gravity;
  W2 = mass2*gravity;
  Fn = W1;
  Fk = Fn*mk;

  // Calculations using Newton's Second Law (Fnet=ma)
  a = (W2-Fk)/(mass1+mass2);
  T = Fk+mass1*a;

  // Set forces
  Force weight1 = new Force (W1, 270, "Weight " + W1 + " N");
  Force normalForce = new Force (Fn, 90, "Normal Force = " + Fn + " N");
  Force keneticFriction = new Force (Fk, 180, "Kenetic Friction = " + Fk + " N");
  Force tension1 = new Force (T, 0, "Tension = " + T + " N");
  Force [] forceArray1 = {weight1, normalForce, keneticFriction, tension1};

  Force weight2  = new Force (W2, 270, "Pull = " + W2 + " N");                     
  Force tension2 = new Force (T, 90, "Tension " + T + " N");
  Force [] forceArray2 = {weight2, tension2};

  // Creates object and sets initial conditions (SI units, 1px = 1m)  
  m1 = new Object (mass1, truck, -60, -50, forceArray1, 100);   
  m2 = new Object (mass2, rock, -30, -25, forceArray2, 100);
  Xi = 250;     
  Vxi = 0;    
  Yi = 250;     
  Vyi = 0; 
  Xi2 = 480;        
  Yi2 = 300;   
  m1.setInitialConditions (Xi, Yi, Vxi, Vyi);
  m2.setInitialConditions (Xi2, Yi2, Vxi, Vyi);

  // Set Scale
  float scale = 0;
  if (mass1 > mass2) {
    scale = m1.getScale();
  } else {
    scale = m2.getScale();
  }

  m1.setScale(scale);
  m2.setScale(scale);
}
