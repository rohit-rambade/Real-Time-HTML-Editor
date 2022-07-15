// html interpreter
let textArea = document.getElementById("editorBox");
let previewArea = document.getElementById("output");

function interpreter() {
    previewArea.innerHTML = textArea.value;
}


//save code option
function saveFileAs() {
    if (promptFilename = prompt("Save file as", "")) {
        var textBlob = new Blob([document.getElementById("editorBox").value], { type: 'text/plain' });
        var downloadLink = document.createElement("a");
        downloadLink.download = promptFilename;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = window.URL.createObjectURL(textBlob);
        downloadLink.click();
        delete downloadLink;
        delete textBlob;
    }
}

document.getElementById("save").onclick = saveFileAs;


//code reset option
const textarea = document.getElementById('editorBox');

textarea.value = '';
const btn = document.getElementById('reset');
btn.addEventListener('click', function handleClick() {
    console.log(textarea.value);
    textarea.value = '';
    previewArea.innerHTML = textArea.value;
});
