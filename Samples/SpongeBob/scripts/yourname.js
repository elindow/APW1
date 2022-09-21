// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {  										 	// jQuery will wait until DOM is ready

    // all custom jQuery will go here
    makeList();
    
    // $("#jQdemo").css("color","blue");										// dynamically sets the style for the specified element
    // $("#jQdemo").html("This list is:" +                                     // adds the text to the html of the element, $ at front of statement indicates jQuery,
    //     "<ul><li>Not found in the HTML page</li>" +                         // # at front of object indicates id, function to be called comes after .
    //     "<li>Dynamically Generated</li>" +
    //     "<li>Sillly</li>" +
    //     "</ul>");		 
    																	  	 

    $("#MButton1").click(function() {  										// assign click() function to button using button id
        let element = document.getElementById('MButton1');
        let buttonText = element.textContent || element.innerText;
        // let element = document.getElementById('MButton1');
        // let buttonText = element.textContent || element.innerText;
        if(buttonText === 'List Eraser'){
            $("#jQdemo").html("Whoa!");
    		//alert("Mystery button clicked");									// call alert just for testing purposes
    		$("#MButton1").html("List Returner");								// change the button label, or do whatever you want
	   } else {
            $("#MButton1").html('List Eraser');
            makeList();
       }
    });																		// note how the jQuery $ identifiers link the html object to the javaScript object

});	// end of jQuery block

function makeList(){
     $("#jQdemo").css("color","blue");                                      // dynamically sets the style for the specified element
    $("#jQdemo").html("This list is:" +                                     // adds the text to the html of the element, $ at front of statement indicates jQuery,
        "<ul><li>Not found in the HTML page</li>" +                         // # at front of object indicates id, function to be called comes after .
        "<li>Dynamically Generated</li>" +
        "<li>Sillly</li>" +
        "</ul>");
}

// more javaScript code not using jQuery could go here