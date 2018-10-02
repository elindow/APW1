function checkemail() {
  var email1 = document.getElementById('email1');
  var email2 = document.getElementById('email2');
  if (email1.value != email2.value){
    alert("The emails must match!");
    return false;
  }
}


function submit_form() {
  alert("Hello "+document.getElementById('name_id').value+". Have a happy birthday on "+
    document.getElementById('date').value)
}


function showImage() {
  var img_element = document.getElementById("puppy_img");

  if (img_element == null) {
 	  var img=document.createElement("img");
    img.setAttribute('id', 'puppy_img');
    img.setAttribute('src', '../images/puppy1.jpg');
    img.setAttribute('height', '82');
    img.setAttribute('width', '164');

    var div_element = document.getElementById("div_img");
    div_element.appendChild(img);
    }
  else {
    img_element.parentNode.removeChild(img_element);
  }
}

