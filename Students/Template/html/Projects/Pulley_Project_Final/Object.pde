class Object {
  // Object properties
  float mass, X, Y, Xi, Yi, Vxi, Vyi, displayScale, Ax, Ay;


  // Image properties
  int adjustX, adjustY, type;
  PImage img;
  Force [] forceArray;

  Object (float mass, PImage img, int imgX, int imgY, Force [] forceArray, float displayScale) {
    // Set values
    this.mass = mass; 
    this.img = img;
    this.forceArray = forceArray;
    this.displayScale = displayScale;

    // adjusts image coordinates
    this.adjustX = imgX;
    this.adjustY = imgY;
  }

  void setInitialConditions (float Xi, float Yi, float Vxi, float Vyi) {
    this.Xi = Xi;
    this.Yi = Yi;
    this.Vxi = Vxi;
    this.Vyi = Vyi;
  }

  void calculatePosition(float t) {
    float Fx = 0;     
    float Fy = 0;
    for (int i = 0; i<forceArray.length; i++) {
      Fx = Fx + forceArray[i].Fx;
      Fy = Fy + forceArray[i].Fy;
    }
    Ax = Fx/mass;
    Ay = Fy/mass;        
    X = Xi + Vxi*t + 0.5*Ax*t*t;      
    Y = Yi - Vyi*t - 0.5*Ay*t*t;      // "-" because down is positive
  }

  float getScale() {
    float maxF = 0;
    for (int i=0; i< forceArray.length; i++) {
      if (forceArray[i].F > maxF) {
        maxF = forceArray[i].F; // biggest force
      }
    }
    return displayScale = 200/maxF; // adjust force arrow length based on force 
    
  }
  
  
  void setScale(float scale) {
      this.displayScale = scale;
  }

  void reset() {
    // set coordinates to initial values
    X = Xi;
    Y = Yi;
  }

  void display() {
    image(img, X+adjustX, Y+adjustY); // object is given img
    for (int i=0; i<forceArray.length; i++) {
      forceArray[i].display (X, Y, displayScale);
    }
    
    
  }

  // ***GETTERS AND SETTERS***

  float getX() {
    return X;
  }

  float getY() {
    return Y;
  }

  float getMass() {
    return mass;
  }

  void setMass(float mass) {
    this.mass = mass;
  }
}
