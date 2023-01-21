function Activated(){
  console.log("Activated");
}
function Saved(){
  console.log("Saved");
}


const buttonData = {
texts: ["Activate", "Save"],
classNames: ["activate-button", "save-button"],
listeners: [
function() {  Activated() },
function() {    Saved()   }
],
type: "button"
}

const buttons = buttonData.texts.map((text, index) => {
const button = document.createElement("button");
button.innerHTML = text;
button.classList.add(buttonData.classNames[index]);
button.type = buttonData.type;
button.addEventListener("click", buttonData.listeners[index]);
return button;
});


function createPopup(popup,textareaWidth) {
  popup = document.createElement("div");
  popup.classList.add("popup");
  popup.setAttribute("id", "popup");
  popup.style.width = textareaWidth;
  event.target.parentNode.parentNode.appendChild(popup);
}
