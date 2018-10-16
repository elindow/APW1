$(document).ready(function(){
 $('.dropdown-submenu a.test').on("click", function(e){
 $(this).next('ul').toggle();
 e.stopPropagation();
 e.preventDefault();
 });
});

$(document).ready(function() {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();

            $.ajax({
                url: 'get-post.php',
                dataType: 'html',
                success: function(html) {
                    $('#posts').append(html);
                    $('#loading').hide();
                }
            });
        }
    });
});


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 