function checkemail() {
  var email1 = document.getElementById('email1');
  var email2 = document.getElementById('email2');
  if (email1.value != email2.value){
    alert("The emails must match!");
    return false;
  }
}


function submit_form() {
  if (document.getElementById('name_id').value == '' || document.getElementById('date').value == '') {
    alert("Enter required information!!");
  }
  else {
  alert("Hello "+document.getElementById('name_id').value+". Have a happy birthday on "+
    document.getElementById('date').value+"!!");
  }
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

    document.getElementById("pic_button").innerHTML="Hide Puppy";
    }
  else {
    img_element.parentNode.removeChild(img_element);
      document.getElementById("pic_button").innerHTML="Show Puppy";
  }
}




//var toggle = true;

var urls = ["http://cowlitzhumane.com/wp-content/uploads/2018/08/2018-08-19_5b78e4806922d_dog1.jpg",
            "https://www.what-dog.net/Images/faces2/scroll001.jpg",
            "https://www.petinsurance.com/images/VSSimages/consumer/v5/banner_dog_insurance.jpg",
            "https://bowwowinsurance.com.au/wp-content/uploads/2014/12/australian-shepherd-700x700.jpg",
            "https://j3uv01gyifh3iqdfjuwz0qip-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/setter.jpg",
            "https://amp.thisisinsider.com/images/5b22bda45e48ec22008b46b5-750-563.jpg",
            "https://www.what-dog.net/Images/faces2/scroll009.jpg"];

function changeImage() {
  index = Math.floor((Math.random() * urls.length));
  document.getElementById('puppy_image').src=urls[index];
  
  //if (toggle) {
  //document.getElementById('puppy_image').src="http://cowlitzhumane.com/wp-content/uploads/2018/08/2018-08-19_5b78e4806922d_dog1.jpg";
  //  toggle = false;
  //}
  //else {
  //document.getElementById('puppy_image').src="https://www.what-dog.net/Images/faces2/scroll001.jpg";
  //  toggle = true;
  //}
  
}