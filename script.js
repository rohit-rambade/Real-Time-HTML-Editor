
let textArea = document.getElementById("editorBox");
let previewArea = document.getElementById("output");

function interpreter() {
    console.log(textArea.value);
    previewArea.innerHTML = textArea.value;
}



function saveFileAs() {
	if (promptFilename = prompt("Save file as", "")) {
		var textBlob = new Blob([document.getElementById("editorBox").value], {type:'text/plain'});
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