// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {  										 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").css("color","red");										// dynamically sets the style for the specified element
    $("#jQdemo").html("This line created dynamically by javaScript");		// adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	  	// # at front of object indicates id, function to be called comes after . 
;	// end of jQuery block

// more javaScript code not using jQuery could go here