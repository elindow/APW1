

function SayHello(){
	var minR=0; 
    var maxR=255;  
    var randomR = Math.floor(Math.random() * (+maxR - +minR)) + +minR;
    var minG=0; 
    var maxG=255;  
    var randomG = Math.floor(Math.random() * (+maxG - +minG)) + +minG;
    var minB=0; 
    var maxB=255;  
    var randomB = Math.floor(Math.random() * (+maxB - +minB)) + +minB;
    document.body.style.backgroundColor = 'rgb(' + [randomR,randomG,randomB].join(',') + ')';
}
