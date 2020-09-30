let answers = [["NSLog", "Hello", "World", "\"", "\"", ";"],
               ["NSString", "*", "=", "@", "\"", "\"", ";"],
               ["int", "=", ";"],
               ["NSArray", "NSArray", "*", "=", "[", "arrayWithObjects:", "]", ";"],
               ["UIView", "*", "=", "[[", "alloc", "initWithFrame", "CGRectMake(", ")];"]];
let currentQuestion = 0;

document.body.onload = function() {
  document.getElementById('main_textbox').classList.add("enter_textbox");
  document.getElementById('answer').focus();
  document.getElementById('answer').select();
}

document.getElementById('answer').onkeydown = function(event) {
  if (event.keyCode == 13) {
    for (let i = 0; i < answers[currentQuestion].length; i++) {
      if (document.getElementById('answer').value.includes(answers[currentQuestion][i]) == false) {
        return;
      }
    }
    document.getElementById('answer').value = "";
    currentQuestion++;
    document.getElementById('level').innerHTML = "Level: " + currentQuestion;

    if (currentQuestion == answers.length) {
        document.getElementById('main_textbox').classList.remove("enter_textbox");
        document.getElementById('main_textbox').classList.add("hide_textbox");
        document.getElementById('success').classList.add("display_success");
    }
  }
}
