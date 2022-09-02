// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function () {
    // jQuery will wait until DOM is ready

    $("#MButton1").click(function () {
        alert("Mystery button clicked");
        console.log($("#MButton1").html());
        if ($("#MButton1").html() == "I was clicked") {
            $("#MButton1").html("Mystery Button");
        } else {
            $("#MButton1").html("I was clicked");
        }
    });
}); // end of jQuery block

// more javaScript code not using jQuery could go here

function save() {
    var textcontent = document.querySelector("textarea").value;

    if (textcontent.length > 0) {
        var downloadableLink = document.createElement("a");
        downloadableLink.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(textcontent)
        );
        var name = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`;
        downloadableLink.download = name;
        document.body.appendChild(downloadableLink);
        downloadableLink.click();
        document.body.removeChild(downloadableLink);
    }
}

function upload() {
    var file = document.getElementById("uploadFile").files[0];

    var reader = new FileReader();
    reader.onload = function (e) {
        var textarea = document.querySelector("textarea");
        textarea.value = e.target.result;
    };

    reader.readAsText(file);
}

function countSelection() {
    var textarea = document.querySelector("textarea");
    var selection = textarea.value.substring(
        textarea.selectionStart,
        textarea.selectionEnd
    );

    if (selection.length == 0) {
        var wordCountSpan = document.getElementById("wordCountNum");
        wordCountSpan.innerHTML = "0";
        return 0;
    }

    var words = selection.split(/\s+/);
    var wordCount = words.length;

    var wordCountSpan = document.getElementById("wordCountNum");
    wordCountSpan.innerHTML = wordCount;
}

function countWords() {
    document
        .querySelector("textarea")
        .addEventListener("input", function countWord() {
            let res = [];
            let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
            str.map((s) => {
                let trimStr = s.trim();
                if (trimStr.length > 0) {
                    res.push(trimStr);
                }
            });
            wordSpan = document.getElementById("wordCountNum");
            wordSpan.innerHTML = res.length;
        });
}

function indent() {
    const textarea = document.querySelector("textarea");

    textarea.addEventListener("keydown", (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();

            textarea.setRangeText(
                "\t",
                textarea.selectionStart,
                textarea.selectionEnd,
                "end"
            );
        }
    });
}
