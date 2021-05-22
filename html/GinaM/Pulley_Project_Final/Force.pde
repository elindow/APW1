class Force {
  float Fx, Fy, F, angle;
  String label;
  String variables;

  Force (float Fsize, float Fangle, String label) {
    F = Fsize;
    angle = Fangle;
    Fx = F*cos(radians(angle));
    Fy = F*sin(radians(angle));
    this.label = label;
    // variables = "(" + Fsize + " N, " + Fangle + " degrees)";
  }

  void display (float x1, float y1, float displayScale) {
    // Arrows + Lines
    fill(0);
    strokeWeight(2);
    stroke(0, 200);       // ARROW COLOR
    float x2 = x1+Fx*displayScale;
    float y2 = y1-Fy*displayScale;
    fill (0, 200);   
    line(x1, y1, x2, y2);
    float D = F*displayScale;
    triangle(x2+10*(x2-x1)/D, y2+10*(y2-y1)/D, x2-10*(y2-y1)/D, y2+10*(x2-x1)/D, 
      x2+10*(y2-y1)/D, y2-10*(x2-x1)/D);
      
    // Text
    textSize(14);
    fill(255);   
    textAlign(CENTER);

    //if statement to make labels below or above Force arrow depending on degree
    if (Fy > 0) {
      text(label, x2, y2-30);
      //text(variables, x2, y2-50);
    } else {
      text(label, x2, y2+30);
      //text(variables, x2, y2+50);
    }
  }
}
