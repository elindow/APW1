var myImage = document.querySelector('img');                      


myImage.onclick = function() {                                   
	var mySrc = myImage.getAttribute('src');                        
	if(mySrc === 'https://greenblender.com/smoothies/wp-content/uploads/2016/05/does-grapefruit-help-you-lose-weight-by-greenblender-fruit.jpg') {                        
      myImage.setAttribute ('src','https://a.ltrbxd.com/resized/sm/upload/ad/c3/b3/xe/phantom-of-the-paradise-1200-1200-675-675-crop-000000.jpg?k=e2efc31cfc');       
	} else if(mySrc === 'https://a.ltrbxd.com/resized/sm/upload/ad/c3/b3/xe/phantom-of-the-paradise-1200-1200-675-675-crop-000000.jpg?k=e2efc31cfc') {
	    myImage.setAttribute ('src','https://lparchive.org/Zork-Grand-Inquisitor/Update%207/1-5guemainfountain.jpg'); 
	} else {
       myImage.setAttribute ('src','https://greenblender.com/smoothies/wp-content/uploads/2016/05/does-grapefruit-help-you-lose-weight-by-greenblender-fruit.jpg');        
  }                                                            
}

var myButton = documentgetElementById('button');

myButton.onclick = function() {                                   // mouse click calls 'setUserName()' function

}