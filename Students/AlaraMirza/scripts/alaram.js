// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {  										 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").css("color","red");										// dynamically sets the style for the specified element
    $("#jQdemo").html("This line created dynamically by javaScript");		// adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	  	// # at front of object indicates id, function to be called comes after . 

    $("#MButton1").click(function() {  										// assign click() function to button using button id
		alert("Mystery button clicked");									// call alert just for testing purposes
		$("#MButton1").html("I was clicked");								// change the button label, or do whatever you want
	});																		// note how the jQuery $ identifiers link the html object to the javaScript object

});	// end of jQuery block

// more javaScript code not using jQuery could go here