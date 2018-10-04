let button = document.getElementById("button");
let submitButton = document.getElementById("submit");
let textbox = document.getElementById("para");
let input = document.getElementById("input");
let name = document.getElementById("name");

button.addEventListener('click', onclick)
function onclick(){
    textbox.innerText += "\nRandom Latin Text: Lorem ipsum dolor sit amet, cu eam munere accusamus, ut utinam utamur docendi pri. Vim at quem alii, eos intellegam suscipiantur te. Te ubique verterem has, vel eu omittam posidonium. Vim at dico vero disputando. Est id possit menandri."
    button.innerHTML = "Surprised?"
    setTimeout(wait, 1000);
    function wait(){
        button.innerHTML = "Press me for a surprise!"
    }
}

submitButton.addEventListener('click', submit);
function submit(){
    textbox.innerText += "\n" + name.value + ": " + input.value;
}