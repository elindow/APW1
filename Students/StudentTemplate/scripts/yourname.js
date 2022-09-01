// JavaScript goes in this file

$(document).ready(function() {  										 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").html("JQuery is working");								  	// adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	  	// # at front of object indicates id, function to be called comes after . 

    $("#MButton1").click(function() {  										// assign click() function to button using button id
		alert("Mystery button clicked");										// call alert just for testing purposes
		$("#MButton1").html("I was clicked");								// change the button lable, or do whatever you want
	});																		// note how much cleaner the code is compared to below
});