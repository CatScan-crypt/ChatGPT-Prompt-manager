const src2 = chrome.extension.getURL("src/inject/button-module.js");

var flag = false;
document.querySelector("textarea").addEventListener("input", async function(event) {
  var popup = document.getElementById("popup");
  var userInput = event.target.value;
  var indexOfSlash = userInput.lastIndexOf("/");
  if (indexOfSlash !== -1) {
    var exactInput = userInput.substring(indexOfSlash);
    if(!flag){
			var textarea = document.querySelector("textarea");
			var textareaWidth = getComputedStyle(textarea).width;
			console.log(textareaWidth);
      // Create the popup window if it doesn't already exist
      if(!popup) {
        popup = document.createElement("div");
        popup.classList.add("popup");
        popup.setAttribute("id", "popup");
				popup.style.width = textareaWidth;
        event.target.parentNode.parentNode.appendChild(popup);
      }
			flag = true;
    }
    var popup = document.getElementById("popup");
    popup.innerHTML = event.target.value;
    // Create the button
    buttons.forEach(button => {
      popup.appendChild(button);
    });
  }else{
    var popup = document.getElementById("popup");
    popup.parentNode.removeChild(popup);
    flag = false;
  }
});
