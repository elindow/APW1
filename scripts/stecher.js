 

	

$(document).ready(function() {  										   // jQuery will wait until DOM is ready

    // all custom jQuery will go here

    $("#jQdemo").html("JQuery is working");								   // adds the text to the html of the element, $ at front of statement indicates jQuery, 
    																	   // # at front of object indicates id, function to be called comes after . 
    $("#LButton1").click(function() {  
		alert("Lindow button clicked");
		$("#LButton1").html("I was clicked");
	});	
	var slideIndex = 0;
	showSlides();
	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}
			slides[slideIndex-1].style.display = "block";
			setTimeout(showSlides, 2000); // Change image every 2 seconds
			} 						   												// assign click() function to button using button id
																			// note how much cleaner the code is compared to below
    //var LindowButton = document.querySelector('button'); 					//this code selects the first (and in this case only) button on the page
	//LindowButton.onclick = function() {  
	//       alert("Lindow button clicked");                                 // mouse click calls 'setUserName()' function
	//}



	// end of jQuery block
});

		
