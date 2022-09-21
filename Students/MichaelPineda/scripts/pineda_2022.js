var img = document.createElement("img")
img.src = "https://static.wikia.nocookie.net/for-all-mankind/images/a/a5/Sojourneraunch.png/revision/latest/scale-to-width-down/185?cb=20220624210606"
document.body.appendChild(img)

var button = document.createElement("button")
button.innerText = "testing"
document.body.appendChild(button)
button.addEventListener("click", alert("Button Clicked"))