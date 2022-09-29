function save() { // Used to download the content of the textarea
    var textcontent = document.querySelector("textarea").value; // Get the content of the textarea and store it in a variable

    if (textcontent.length > 0) { // Only continue with downloading if the textarea has content
        var downloadableLink = document.createElement("a"); // Create a new element that will be used as an invisible download link
        downloadableLink.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(textcontent)
        ); // Set download file to a .txt
        var name = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`; // Set name of file to the current date and time
        downloadableLink.download = name; // Set the name of the file to the variable name
        document.body.appendChild(downloadableLink); // Add the invisible download link element to the document
        downloadableLink.click(); // Click the invisible download link element
        document.body.removeChild(downloadableLink); // Remove the invisible download link element from the document
    }
}

function upload() { // Used to upload a file to the textarea
    var file = document.getElementById("uploadFile").files[0]; // Get the selected file from the input element and store it in a variable

    var reader = new FileReader(); // Create a new FileReader object
    reader.onload = function (e) { // When the reader is loaded
        var textarea = document.querySelector("textarea"); // Get the textarea element and store it in a variable
        textarea.value = e.target.result; // Set the content of the textarea to the content of the file
    };

    reader.readAsText(file); // Read the file as text
}

function countSelection() { // Used to count the words when text is selected
    var textarea = document.querySelector("textarea"); // Get the textarea element and store it in a variable
    var selection = textarea.value.substring( // Get the selected text from the textarea and store it in a variable
        textarea.selectionStart, // Get the start of the selection
        textarea.selectionEnd // Get the end of the selection
    );

    if (selection.length == 0) { // If there is no words selected display 0
        var wordCountSpan = document.getElementById("wordCountNum"); // Get the word count span element and store it in a variable
        wordCountSpan.innerHTML = "0"; // Set the content of the word count span element to 0
        return 0; // Return 0
    }

    var words = selection.split(/\s+/); // Split on whitespaces 
    var wordCount = words.length; // Get the length of the array

    var wordCountSpan = document.getElementById("wordCountNum"); // Get the word count span element and store it in a variable
    wordCountSpan.innerHTML = wordCount; // Set the content of the word count span element to the word count
}

function countWords() { // Used to count words when no text is selected
    document
        .querySelector("textarea") // Get the textarea element
        .addEventListener("input", function countWord() { // Add an event listener for input to the textarea element
            let res = []; // Create an empty array
            let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" "); // Replaces any characters like ! and ? and tab spaces with white spaces and then splits by white spaces
            str.map((s) => { // Map over the array
                let trimStr = s.trim(); // Trim the string
                if (trimStr.length > 0) { // If the string is not empty
                    res.push(trimStr); // Push the string to the array
                }
            });
            wordSpan = document.getElementById("wordCountNum"); // Get the word count span element and store it in a variable
            wordSpan.innerHTML = res.length; // Set the content of the word count span element to the length of the array
        });
}

function indent() { // This function is needed because you cannot indent in a textarea by default
    const textarea = document.querySelector("textarea"); // Get the textarea element and store it in a variable

    textarea.addEventListener("keydown", (e) => { // Add an event listener for keydown to the textarea element
        if (e.keyCode === 9) { // If the key pressed is tab
            e.preventDefault(); // Prevent the default action

            textarea.setRangeText( // Set the text in the textarea
                "\t", // The text to set
                textarea.selectionStart, // The start of the selection
                textarea.selectionEnd, // The end of the selection
                "end" // The position of the cursor after the text is set
            );
        }
    });
}
