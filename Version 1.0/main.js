// local JavaScript (js) code wrapped into website at runtime
// Image switcher code

window.scrollTo(0, 0);

var myImage = document.querySelector('img');                      // declare/define variable 'myImage', note lines end with ;
var x = "Total Width: " + window.innerWidth;
document.getElementById("demo").innerHTML = x;

myImage.onclick = function() {                                    // this is a java script (js) function, runs on mouse click
	var mySrc = myImage.getAttribute('src');                        // creates a variable to hold an image
	if(mySrc === 'images/Trevor Logo.PNG') {                        // checks for the original image. note '===' for comparison operator
      myImage.setAttribute ('src','images/bad error.png');        // if it is, fake error message
	} else if(mySrc === 'images/bad error.png') {
	    myImage.setAttribute ('src','images/Exploding_Computer.jpg'); // if not logo but is error message, burning laptop
	} else {
       myImage.setAttribute ('src','images/Trevor Logo.PNG');        // otherwise return to original logo
  }                                                             // note braces used to deliniate blocks
}

// Personalized welcome message code

var myButton = document.getElementById('input');
// new button goes here                // creates button variable for js
var myHeading = document.querySelector('h1');                     // creates var for h1 style header

function setUserName() {                                          // another js function, this one called internally later on
  var myName = prompt('Please enter your name.');                 // local var from prompt (built-in js function)
  localStorage.setItem('name', myName);                           // store var in local storage using (hash?)keyword 'name'
  myHeading.innerHTML = 'Hey ' + myName + ', you pressed the button!';   // add this text to the html of the h1 style object
}

if(!localStorage.getItem('name')) {                               // checks for existence of value for 'name' in local storage
  setUserName();                                                  // if null, call above function
} else {
  var storedName = localStorage.getItem('name');                  // load item referenced by 'name' in local storage into var storedName
  myHeading.innerHTML = 'Coding is cool, ' + storedName;          // update H1 style object
}

myButton.onclick = function() {                                   // mouse click calls 'setUserName()' function
  setUserName();
}


//You can also add an event listener which fires when a change is detected:
const mq = window.matchMedia("(min-width: 500px)");
// media query event handler
if (matchMedia) {

mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {
// window width is at least 500px
  document.getElementById("demo").innerHTML = "Window width > 500 px";
} else {
// window width is less than 500px
  document.getElementById("demo").innerHTML = "Window width< 500px";
}
}

if (mq.matches) {
// window width is at least 500px
} else {
// window width is less than 500px
}
