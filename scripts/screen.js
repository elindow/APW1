let button = document.getElementById("button");
let submitButton = document.getElementById("submit");
let textbox = document.getElementById("para");
let input = document.getElementById("input");
let name = document.getElementById("name");
let num;

button.addEventListener('click', onclick)
function onclick(){
    name.value = "Charlie";
    noun.value = "food";
    adjective.value = "big";
    verb.vlaue = "eat"
    submit();
    button.innerHTML = "Do you like it?"
    setTimeout(wait, 2000);
    function wait(){
        button.innerHTML = "Press me for a surprise!"
    }
}

submitButton.addEventListener('click', submit);
function submit(){
    console.log(name.value)

    num = story.value;
    if(num == 0){
        textbox.innerHTML = `${name.value} the squirrel had just climbed up the ${adjective.value} tree.
        It was the first day of autum and time to ${verb.value} as many ${noun.value}s for winter
        feasting.`;
    }else if(num == 1){
        textbox.innerHTML = `Pizza was invented by a ${adjective.value} chef named
        ${name.value}. To make a pizza, you need to take the lump of ${noun.value}, and make
        a thin, round, ${adjective.value} sauce and cheese. Next you have to ${verb.value} it 
        into a circle. And that is how you make pizza.`
    }else if(num == 2){
        textbox.innerHTML = `*A one-act play to be performed by two ${name.value}'s in this room*
        \nPATIENT: Thank you so very much for ${verb.value}ing me, Doctor ${name.value},
        Doctor ${name.value}.\nDENTIST: What is you problem, young ${noun.value}?
        \nPATIENT: My ${adjective.value} mouth is hurting.
        \nDENTIST: Open your mouth. Now, I'm going to tap your ${noun.value} with my ${noun.value}.
        \nPATIENT: Are you going to take my ${noun.value} out?
        DENTIST: No, I'm going to just going to ${verb.value} your mouth.`
    }
}