 

	

$(document).ready(function() {  										   // jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").html("JQuery is working");								   // adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	   // # at front of object indicates id, function to be called comes after . 
    $("#LButton1").click(function() {  
		alert("Lindow button clicked");
		$("#LButton1").html("I was clicked");
	});	
							   												// assign click() function to button using button id
																			// note how much cleaner the code is compared to below
    //var LindowButton = document.querySelector('button'); 					//this code selects the first (and in this case only) button on the page
	//LindowButton.onclick = function() {  
	//       alert("Lindow button clicked");                                 // mouse click calls 'setUserName()' function
	//}



	// end of jQuery block
});

		
