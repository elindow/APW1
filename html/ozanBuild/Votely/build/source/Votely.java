import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.awt.*; 
import java.lang.reflect.Field; 
import java.awt.*; 
import javax.swing.*; 
import java.awt.event.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Votely extends PApplet {








///////////////////////////////////////////////////////////////////////////////

Callable currentPage;
int votePageC = color(42, 130, 98);
int homePageC = color(93, 185, 226);
int chatPageC = color(141, 194, 201);
int dataPageC = color(167, 108, 196);
int infoPageC = color(230, 198, 96);
int homePageButtonC = homePageC;
int dataPageButtonC = color(72,89,179);
int infoPageButtonC = color(72,89,179);
int chatPageButtonC = color(72,89,179);
int votePageButtonC = color(62, 201, 148);


Button chatButton, dataButton, infoButton, homeButton;
Button backButton;
Button voteButton;
Button candidateButton;
Button issuesButton;
Button myProfileButton;
Button gunButton;
Button raceButton;
Button genderButton;

Button[] textboxes = new Button[3];

Button[] candidates = new Button[3];

String nameTyping = "";
String socialSecurityTyping = "";
String nameSaved = "Ozan Mirza";
String socialSecurity = "1234567";
String textTyping = "";
String textSaved = "";
float nameWidth3;
float nameWidth;
float nameWidth2;
boolean textboxPressed;

Button sumbitButton;


public interface Callable {
  public void callback();
}

public void setup() {
  

  // Setting App Icon
  surface.setIcon(loadImage("Assets/AppIcon.png"));

  // Create Buttons
  chatButton = new Button(width/4, height/6, 60, 60, 10, chatPageButtonC);
  dataButton = new Button(width/4*2, height/6, 60, 60, 10, dataPageButtonC);
  infoButton = new Button(width/4*3, height/6, 60, 60, 10, infoPageButtonC);
  backButton = new Button(width/8*7, height/6, 60, 60, 10, homePageButtonC);
  voteButton = new Button(width/2, height/6*5, 100, 100, 100, votePageButtonC);
  // donaldButton = new Button(width/2, height/3 * 1 + 60, 60, 60);
  // bernieButton = new Button(width/2, height/3 * 2 + 60, 60, 60);

  candidateButton = new Button(width/2, height/6*2, width-50, height/6, 20, color(212, 115, 93));
  issuesButton = new Button(width/2, height/6*3 + 20, width-50, height/6, 20, color(94, 152, 191));
  myProfileButton = new Button(width/2, height/6*4 + 60, width-50, height/6, 20, color(84, 179, 108));

  currentPage = new SignIn();

  candidates[0] = new Button(width/2, height/3 * 1, width - 50, 75, 20, color(191, 57, 57));
  candidates[1] = new Button(width/2, height/3 * 2, width - 50, 75, 20, color(48, 99, 201));
  candidates[2] = new Button(width/2, height/3 * 3, width - 50, 75, 20, color(48, 99, 201));

  genderButton = new Button(width/2, height/6*2, width-50, height/6, 20, color(109, 77, 168));
  gunButton = new Button(width/2, height/6*3 + 20, width-50, height/6, 20, color(204, 158, 78));
  raceButton = new Button(width/2, height/6*4 + 60, width-50, height/6, 20, color(93, 156, 113));
  textboxes[0] = new Button(width/2, height/3 + 75, width - 50, height/20, 10, color(255));
  textboxes[1] = new Button(width/2, height/5 + 50, width - 50, height/20, 10, color(255));
  textboxes[2] = new Button(width/2, 500, width - 50, height/10, 10, color(255));
  sumbitButton = new Button(width/2, height- 100, width/2, height/20, 10, color(102, 176, 129));
}

public void draw() {
  currentPage.callback();
}

public void mousePressed() {
  // Opens and Closes Tabs
  chatButton.pressed(new ChatPage());
  dataButton.pressed(new DataPage());
  infoButton.pressed(new InfoPage());
  backButton.pressed(new HomePage());
  voteButton.pressed(new VotePage());
  raceButton.pressed(new RaceForum());
  gunButton.pressed(new GunForum());
  genderButton.pressed(new GenderForum());
  candidateButton.pressed(new CandidatesPage());
  issuesButton.pressed(new IssuesPage());
  myProfileButton.pressed(new MyProfilePage());
  candidates[0].pressed(new VotedPage());
  candidates[1].pressed(new VotedPage());
  sumbitButton.pressed(new HomePage());
  textboxes[0].activate();
  textboxes[1].activate();
  textboxes[2].activate();
}

class HomePage implements Callable {
  public void callback() {
    currentPage = this;
    background(homePageC);
    chatButton.page = this;
    infoButton.page = this;
    dataButton.page = this;
    chatButton.display(loadImage("Assets/chat.png"));
    infoButton.display(loadImage("Assets/info.png"));
    dataButton.display(loadImage("Assets/stats.png"));
    chatButton.hover();
    infoButton.hover();
    dataButton.hover();
    textSize(35);
    textAlign(CENTER);
    fill(255);
    text("Home Page", 200, 37.5f);

    image(loadImage("Assets/USA.png"), (width / 2) - 175, (height / 2) - 87.5f);

    // Display Vote Button
    voteButton.display(loadImage("Assets/pollicon.png"));
    voteButton.hover();
  }
}

class InfoPage implements Callable {
  public void callback() {
    currentPage = this;
    backButton.page = this;
    candidateButton.page = this;
    issuesButton.page = this;
    myProfileButton.page = this;

    background(infoPageC);
    backButton.c = chatPageButtonC;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();

    candidateButton.display(loadImage("Assets/donald.png"));
    issuesButton.display(loadImage("Assets/issuesicon.png"));
    myProfileButton.display(loadImage("Assets/profile.png"));
    candidateButton.hover();
    issuesButton.hover();
    myProfileButton.hover();
    fill(255);
    textSize(40);
    textAlign(CORNER);
    text("Candidates", width/2 - 100, height/6*2 + 20);
    text("Issues", width/2 - 100, height/6*3 + 20);
    text("My Profile", width/2 - 100, height/6*4 + 40);
  }
}

class CandidatesPage implements Callable {
  public void callback() {
    currentPage = this;
    backButton.page = this;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
    background(212, 115, 93);
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text("Candidates", width/2, 40);

  }
}

class IssuesPage implements Callable {
  public void callback() {
    currentPage = this;
    backButton.page = this;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
    background(94, 152, 191);
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text("Issues", 200, 40);
  }
}

class MyProfilePage implements Callable {
  public void callback() {
    currentPage = this;
    background(84, 179, 108);
    textAlign(CENTER);
    textSize(35);
    fill(255);
    textSize(35);
    text("Your Profile", 200, 40);
    textSize(20);
    text("Name:" + nameSaved, width/2, 150);
    text("Social Security:" + socialSecurity, width/2, 250);
  }
}

class DataPage implements Callable {
  public void callback() {
    currentPage = this;
    background(dataPageC);
    backButton.page = this;
    backButton.c = dataPageButtonC;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text("Data Page", 200, 40);
    image(loadImage("Assets/figure1.png"), (width / 2) - 125, 150);
    image(loadImage("Assets/figure2.png"), (width / 2) - 125, 375);
  }
}

class ChatPage implements Callable {
  public void callback() {
    currentPage = this;
    backButton.page = this;
    genderButton.page = this;
    gunButton.page = this;
    raceButton.page = this;
    background(chatPageC);
    backButton.c = chatPageButtonC;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text("Chat Page", 200, 40);
    genderButton.display(loadImage("Assets/guns.png"));
    gunButton.display(loadImage("Assets/gender.png"));
    raceButton.display(loadImage("Assets/bias.png"));
    genderButton.hover();
    gunButton.hover();
    raceButton.hover();
    fill(255);
    text("Guns", width/2 - 100, height/6*2 + 20);
    text("Gender", width/2 - 100, height/6*3 + 20);
    text("Bias", width/2 - 100, height/6*4 + 40);
  }
}

class VotePage implements Callable {
  public void callback() {
    currentPage = this;
    backButton.page = this;
    candidates[0].page = this;
    candidates[1].page = this;

    background(votePageC);
    backButton.c = votePageButtonC;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
    textAlign(CENTER);
    text("Donald Trump", width/2, height/3 * 1);
    text("Bernie Sanders", width/2, height/3 * 2);
    candidates[0].display(loadImage("Assets/donald.png"));
    candidates[1].display(loadImage("Assets/bernie.png"));
    textAlign(CENTER);
    fill(255);
    text("Vote Page", width/2, 40);
  }
}

class VotedPage implements Callable {
  public void callback() {
    currentPage = this;
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text("Thank You for Voting!", width/2, height/2);
    backButton.c = homePageButtonC;
    backButton.display(loadImage("Assets/arrow.png"));
    backButton.hover();
  }
}



class GenderForum implements Callable {
  public void callback() {
    currentPage = this;
    textSize(10);
    // text("Women should have equal rights", 15, 80);
    // text("Excuse me? There is research.");
    // text("The Gov't is lying to us.");
    // text("I cannot belive you");
    // text("I believe in complete equality both financially and socially!");

    textSize(15);
    textboxes[2].page = this;
    textboxes[2].display();
    textboxes[2].hover();

    textAlign(CORNER);
    float textX2 = textboxes[2].x - textboxes[2].w/2 + 20;
    float textY2 = textboxes[2].y + textboxes[2].h/2 - 10;

    text(textTyping, textX2, textY2); // input
  }
}

class GunForum implements Callable {
  public void callback() {
    currentPage = this;
    textSize(10);
    // text("guns are a constituional right for defending civilians against the government", 15, 80);
    // text("guns are a dangerous tool used by ill-intending individuals to exact their");
    // text("Don't lie to me.");
    // text("Pfff!!! Canada isn't real!");
    // text("There have been many school shootings, GUNS ARE BAD");

    textSize(15);
    textboxes[2].page = this;
    textboxes[2].display();
    textboxes[2].hover();

    textAlign(CORNER);
    float textX2 = textboxes[2].x - textboxes[2].w/2 + 20;
    float textY2 = textboxes[2].y + textboxes[2].h/2 - 10;

    text(textTyping, textX2, textY2); // input
  }
}

class RaceForum implements Callable {
  public void callback() {
    currentPage = this;
    textSize(10);
    // text("Canada isn't real", 15, 80);
    // text("Excuse me? I live in Canada.");
    // text("Don't lie to me.");
    // text("");
    // text("");

    textSize(15);
    textboxes[2].page = this;
    textboxes[2].display();
    textboxes[2].hover();

    textAlign(CORNER);
    float textX2 = textboxes[2].x - textboxes[2].w/2 + 20;
    float textY2 = textboxes[2].y + textboxes[2].h/2 - 10;

    text(textTyping, textX2, textY2); // input
  }
}

class SignIn implements Callable {
  public void callback() {
    currentPage = this;
    textboxes[0].page = this;
    textboxes[1].page = this;
    sumbitButton.page = this;
    background(102, 146, 176);
    textSize(35);
    textAlign(CENTER);
    text("Sign In", width/2, 50);
    textSize(20);
    text("Full Name", width/2, height/3 + 25);
    text("Social Security", width/2, height/5);
    fill(255);
    textboxes[0].display();
    textboxes[0].hover();
    textboxes[1].display();
    textboxes[1].hover();

    sumbitButton.display();
    sumbitButton.hover();
    fill(255);
    text("Submit", width/2, height - 92);


    // Display typed text
    float textX = textboxes[0].x - textboxes[0].w/2 + 20;
    float textY = textboxes[0].y + textboxes[0].h/2 - 10;
    float textX1 = textboxes[1].x - textboxes[1].w/2 + 20;
    float textY1 = textboxes[1].y + textboxes[1].h/2 - 10 ;
    fill(0);
    textSize(25);
    textAlign(CORNER);
    text(nameTyping, textX, textY); // input
    text(socialSecurityTyping, textX1, textY1);

    // Display text cursor
    nameWidth = textWidth(nameTyping);
    if (textboxPressed) {
      if (frameCount % 80 >= 0 && frameCount % 80 <= 25) {
        strokeWeight(1);
        stroke(0);
        line(nameWidth + textX, textY + 5, nameWidth + textX, textY - 28);
      }
    }
  }
}

public void keyPressed() {
  // Text input feature
    if (textboxes[0].pressed) {
      if (key == 8 && nameTyping.length() > 0) {
        // If delete key is pressed the string becomes 1 character smaller
        nameTyping = nameTyping.substring (0, nameTyping.length()-1);
      } else {
        nameWidth = textWidth(nameTyping);
        if (nameWidth < textboxes[0].w - 40) {
          // Each character typed by the user is added to the end of the string variable
          nameTyping = nameTyping + key;
        }
      }
    }
    if (textboxes[1].pressed) {
      if (key == 8 && socialSecurityTyping.length() > 0) {
        // If delete key is pressed the string becomes 1 character smaller
        socialSecurityTyping = socialSecurityTyping.substring(0, socialSecurityTyping.length() - 1);
      } else {
        nameWidth2 = textWidth(socialSecurityTyping);
        if (nameWidth < textboxes[1].w - 40) {
          // Each character typed by the user is added to the end of the string variable
          socialSecurityTyping = socialSecurityTyping + key;
        }
      }
    }
    if (textboxes[2].pressed) {
      if (key == 8 && textTyping.length() > 0) {
        // If delete key is pressed the string becomes 1 character smaller
        textTyping = textTyping.substring(0, textTyping.length() - 1);
      } else {
        nameWidth3 = textWidth(textTyping);
        if (nameWidth < textboxes[1].w - 40) {
          // Each character typed by the user is added to the end of the string variable
          textTyping = textTyping + key;
        }
      }
    }
}
class Button {
  float x;
  float y;
  float w;
  float h;
  int curve;
  int c;
  boolean pressed;
  Callable page;

  Button(float tempx, float tempy, float tempw, float temph, int tempcurve, int tempc) {
    x = tempx;
    y = tempy;
    w = tempw;
    h = temph;
    curve = tempcurve;
    c = tempc;
    pressed = false;
  }

  public void display(PImage icon) {
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

  public void hide() {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
  }

  public void display() {
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

  public void hover() {
    if (mouseX >= x - w/2 && mouseX <= x + w/2
      && mouseY >= y - h/2 && mouseY <= y + h/2) {
        fill(0, 50);
        rect(x, y, w, h, curve);
      }
  }

  public void pressed(Callable success) {
    if (mouseX >= x - w/2 && mouseX <= x + w/2 && mouseY >= y - h/2 && mouseY <= y + h/2 && mousePressed && currentPage == this.page) {
      success.callback();
    }
  }

  public void activate() {
    pressed = mouseX >= x - w/2 && mouseX <= x + w/2 && mouseY >= y - h/2 && mouseY <= y + h/2 && mousePressed;
  }
}


  public void settings() {  size(400, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Votely" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
