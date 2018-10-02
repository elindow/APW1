function checkemail() {
  var email1 = document.getElementById('email1');
  var email2 = document.getElementById('email2');
  if (email1.value != email2.value){
    alert("The emails must match!");
    return false;
  }
}


function showImage() {
  var pic_element = document.getElementById("new_img");

  if (pic_element == null) {
 	  var img=document.createElement("img");
    img.setAttribute('id', 'new_img');
    img.setAttribute('src', '../images/puppy1.jpg');
    img.setAttribute('height', '82');
    img.setAttribute('width', '164');
    var foo = document.getElementById("myPicture");
    foo.appendChild(img);
    }
  else {
    pic_element.parentNode.removeChild(pic_element);
  }
}

