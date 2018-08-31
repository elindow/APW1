// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Trevor Logo.png') {
      myImage.setAttribute ('src','images/bad error.png');
	} else {
	  myImage.setAttribute ('src','images/Exploding_Computer.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hey' + myName + ', you are cool!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Coding is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
