// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {  
									 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here
    // var lightMode = true;   

    $("#jQdemo").css("color","indigo");										// dynamically sets the style for the specified element
    $("#jQdemo").html("This sentence is really cool");		// adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	  	// # at front of object indicates id, function to be called comes after . 

    $("#MButton1").click(function() {  // assign click() function to button using button id
        if ($("#MButton1").text() == "darkmode"){ // uses button name as boolean
		  alert("Oooh nice! You chose darkmode B)");									// call alert just for testing purposes
		  $("#MButton1").html("lightmode");	//changes button name to lightmode
          $("body").css('background-color', '#1D1535'); //changes background color to dark blue
          $("#box").css('border-color', 'white'); // changes box's border color to white
          $("h2").css('color', 'white'); //changes title color to white
          $('#Taru').attr('src', '../images/darkmode.png'); // changes image to darkmode version
        } else { // else (if not darkmode)
            alert("Cool, ya chose the light mode :)"); // alert
            $("#MButton1").html("darkmode"); // changes button name to darkmode
            $("body").css('background-color', 'white'); //changes background color to whute
            $("h2").css('color', 'black'); // changes title color to black
            $("#box").css('border-color', 'indigo'); // changes box border color to purple
            $('#Taru').attr('src', '../images/lightmode.png'); // changes image back to lightmode version

            //lightMode = true;
            }
            				// change the button label, or do whatever you want
	});																		// note how the jQuery $ identifiers link the html object to the javaScript object

});	// end of jQuery block

// more javaScript code not using jQuery could go here
