// ==========================================
// GLOBAL FUNCTIONS
// ==========================================

//Global Variables
let coinAmount = getInnerTextNumber("coins");

// Get Inner Text Number
function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const elementInnerText = element.innerText;
  const elementInnerTextNumber = parseInt(elementInnerText);
  return elementInnerTextNumber;
}

// Set Inner Text
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// Call Alert Message
function callFunction(id, message) {
  document.getElementById(id).addEventListener("click", function () {
    if (coinAmount < 20) {
      alert(
        "❌ You don't have enough coins! You need at least 20 coins to make a call.",
      );
      return;
    }
    alert(message);
    coinAmount = coinAmount - 20;
    setInnerText("coins", coinAmount);
  });
}

//History Area Function
function makeNewElement(id, title, number) {
  document.getElementById(id).addEventListener("click", function () {
    if (coinAmount < 20) {
      return;
    }
    const element = document.createElement("div");
    const date = new Date().toLocaleTimeString();
    const historyArea = document.getElementById("history-area");

    element.innerHTML = `
    <div
            class="flex justify-between items-center bg-gray-200 p-2 rounded-lg"
          >
            <div>
              <h4 class="font-bold">${title}</h4>
              <p class="text-gray-500">${number}</p>
            </div>
            <div>
              <p class="text-gray-600">${date}</p>
            </div>
          </div>
    `;
    historyArea.appendChild(element);
  });
}
// Heart Count Function
const hearts = document.getElementsByClassName("fa-heart");
let heartNumber = getInnerTextNumber("heart-count");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartNumber++;
    setInnerText("heart-count", heartNumber);
  });
}

// History Function
makeNewElement("national-call", "National Emergency", "999");
makeNewElement("police-call", "Police Helpline", "999");
makeNewElement("fire-call", "Fire Service", "999");
makeNewElement("ambulance-call", "Ambulance Service", "1994-999999");
makeNewElement("help-call", "Women & Child Helpline", "109");
makeNewElement("govt-call", "Anti-Corruption Helpline", "106");
makeNewElement("electricity-call", "Electricity Helpline", "16216");
makeNewElement("brac-call", "Brac Helpline", "16445");
makeNewElement("railway-call", "Bangladesh Railway Helpline", "163");

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-area").innerHTML = "";
});
// Call Buttons Function
const callBtns = document.getElementsByClassName("call-btns");
const callTitles = document.querySelectorAll(".card-content .text-xl");

callFunction("national-call", "📞 Calling National Emergency Number 999...");
callFunction("police-call", "📞 Calling Police Helpline Number 999...");
callFunction("fire-call", "📞 Calling Fire Service Number 999...");
callFunction("ambulance-call", "📞 Calling Ambulance Service 1994-999999...");
callFunction("help-call", "📞 Women & Child Helpline 109...");
callFunction("govt-call", "📞 Calling Anti-Corruption Helpline 106...");
callFunction("electricity-call", "📞 Calling Electricity Helpline 16216...");
callFunction("brac-call", "📞 Calling Brac Helpline 16445...");
callFunction("railway-call", "📞 Calling Bangladesh Railway Helpline 163...");

// Copy Button Function
const copyBtns = document.querySelectorAll(".copy-btn");
const callNumbers = document.querySelectorAll(".call-number");
copyBtns.forEach((button, i) => {
  button.addEventListener("click", () => {
    const textToCopy = callNumbers[i].innerText;

    navigator.clipboard.writeText(textToCopy);

    alert("Number Copied...");
  });
});
