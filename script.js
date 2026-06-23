// ==========================================
// GLOBAL FUNCTIONS
// ==========================================

// Get Inner Text Number
function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const elementInnerText = element.innerText;
  const elementInnerTextNumber = parseInt(elementInnerText);
  return elementInnerTextNumber;
}

// Set Inner Text
function setInnerText(value) {
  const element = document.getElementById("heart-number");
  element.innerText = value;
}

const hearts = document.getElementsByClassName("fa-heart");
let heartNumber = getInnerTextNumber("heart-number");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartNumber++;
    setInnerText(heartNumber);
  });
}
