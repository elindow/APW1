// Start of CentralBody class

class CentralBody {
  float G, M, R, Xc, Yc, scale;

  CentralBody (float M, float R, float scale) {
    G = 6.674*pow(10, -11);
    this.M = M;
    this.R = R;
    Xc = width/2;
    Yc = height/2;
    this.scale = scale;
  }

  float getAx (float X, float Y) {
    float r = sqrt(sq(X-Xc)+sq(Y-Yc));
    return -G*M*(X-Xc)/pow(r, 3);
  }

  float getAy (float X, float Y) {
    float r = sqrt(sq(X-Xc)+sq(Y-Yc));
    return -G*M*(Yc-Y)/pow(r, 3);
  }

  float getXcenter () {
    return Xc;
  }

  float getYcenter () {
    return Yc;
  }
  
  float getR() {
    return 2*R/scale;
  }

  void display () {
    fill (240, 198, 115);
    noStroke();
    ellipse (Xc, Yc, 2*R/scale, 2*R/scale);
  }
}
