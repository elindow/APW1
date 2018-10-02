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
    img.id = 'new_img'
    img.src='../images/puppy1.jpg';
    img.width="164";
    img.height="82";
    var foo = document.getElementById("myPicture");
    foo.appendChild(img);
    }
}

