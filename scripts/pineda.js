let p = document.createElement('p');
let body = document.querySelector("body");
// var http = require('http');
// h1.innerText = e;
// header.appendChild(e);


function onClick() {
	p = document.createElement('p');
	p.innerText = 'Clicked';
	body.appendChild(p);
}

// function onPageLoad() {
// 	header.appendChild(e);
// 	fetch(
// 		"https://trevor.org",
// 		{
// 			method: "GET"
// 		},
// 	)
// 		.then(function (response){
// 			return response.text();
// 		})
// 		.then(function(text){
// 			e = text;
// 			header.appendChild(e);
// 		})

// }

// function onPageLoad() {
// 	var fetch = http.request({
// 	  host: "stackoverflow.com",
// 	  port: 80,
// 	  path: "/",
// 	  method: "GET",
// 	  withCredentials: false // this is the important part
// 	}, function(res) {
// 	    var result = ""
// 	    res.on('data', function(chunk) {
// 	        result += chunk;
// 	    });
// 	    res.on('end', function() {
// 	        console.log("response.................");
// 	        console.log(result);
// 	    });
// 	});
// }


