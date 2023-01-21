const buttonsModule = chrome.extension.getURL("src/inject/button-module.js");
var flag = false;
document.querySelector("textarea").addEventListener("input", async function(event) {

  var userInput = event.target.value;
  var indexOfSlash = userInput.lastIndexOf("/");
  if (indexOfSlash !== -1) {
    var exactInput = userInput.substring(indexOfSlash);
    if(!flag){
      // Create the popup window if it doesn't already exist
      var textarea = document.querySelector("textarea");
      var textareaWidth = getComputedStyle(textarea).width;
      if(!popup){
        popup = document.createElement("div");
        popup.classList.add("popup");
        popup.setAttribute("id", "popup");
        popup.style.width = textareaWidth;
        event.target.parentNode.parentNode.appendChild(popup);
      }
      flag = true;
    }
    // Create the header element if it doesn't already exist
    var popup = document.getElementById("popup");
    var header = popup.querySelector(".header");
    if (!header) {
      header = document.createElement("div");
      header.classList.add("header");
      popup.appendChild(header);
    }

    // Append user input to header
    header.innerHTML = event.target.value;

    // Create the footer element if it doesn't already exist
    var footer = popup.querySelector(".footer");
    if (!footer) {
      footer = document.createElement("div");
      footer.classList.add("footer");
      popup.appendChild(footer);
    }
    // Append the buttons to the footer
      buttons.forEach(button => {
      footer.appendChild(button);
      });
      }else{
      var popup = document.getElementById("popup");
      popup.parentNode.removeChild(popup);
      flag = false;
      }
      });
