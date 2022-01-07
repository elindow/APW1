class Object {
  float radius, Xc, Yc, X, Y, Vx, Vy, Vx1, Vy1, scale;
  CentralBody myBody;


  Object (float radius, CentralBody myBody, float scale) {
    this.radius = radius;
    this.myBody = myBody;
    Xc = myBody.getXcenter();
    Yc = myBody.getYcenter();
    this.scale = scale;
  }

  void setInitialConditions (float Vi, float deg, float Xi, float Yi) {
    X = (Xi-Xc)*scale;
    Y = (Yi-Yc)*scale;
    Vx = Vi*cos(radians(deg));
    Vy = Vi*sin(radians(deg));
  }

  void moveObject (float dt) {
    float Ax = myBody.getAx(X, Y);
    float Ay = myBody.getAy(X, Y);      
    Vx1 = Vx;                     
    Vy1 = Vy;  
    Vx = Vx + Ax * dt;            
    Vy = Vy + Ay * dt;
    X = X + (Vx1+Vx)/2 * dt;      
    Y = Y - (Vy1+Vy)/2 * dt;        // neg bc down is +
  }

  float getXdisplay() {
    return Xc+X/scale;
  }

  float getYdisplay() {
    return Yc+Y/scale;
  }

  float getTime() {
    return t;
  }

  float getScale() {
    return scale;
  } 

  float getX() {
    return X;
  }

  float getY() {
    return Y;
  }

  void display() {  
    noStroke();
    fill(166, 138, 101);
    ellipse(getXdisplay(), getYdisplay(), 2*radius/scale, 2*radius/scale);
    //dist(pluto.getXdisplay(), pluto.getYdisplay(), sun.getXcenter(), sun.getYcenter()
    
    stroke(211, 227, 230);
    //strokeWeight(5);
    //point(getXdisplay(), getYdisplay());
  }
}
