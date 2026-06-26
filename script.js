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
    if(coinAmount <20){
        alert("❌ You don't have enough coins! You need at least 20 coins to make a call.")
        return;
    }
    alert(message);
    coinAmount = coinAmount - 20;
    setInnerText("coins", coinAmount)
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

// Call Buttons Function
const callBtns = document.getElementsByClassName("call-btns");
const callTitles = document.querySelectorAll(".card-content .text-xl");

for (const btn of callBtns) {
  btn.addEventListener("click", function (e) {
    // for (const callTitle of callTitles) {
    //   alert(callTitle.innerText);
    //   return;
    // }
  });
}
callFunction("national-call", "📞 Calling National Emergency Number 999...");
callFunction("police-call", "📞 Calling Police Helpline Number 999...");
callFunction("fire-call", "📞 Calling Fire Service Number 999...");
callFunction("ambulance-call", "📞 Calling Ambulance Service 1994-999999...");
callFunction("help-call", "📞 Women & Child Helpline 109...");
callFunction("govt-call", "📞 Calling Anti-Corruption Helpline 106...");
callFunction("electricity-call", "📞 Calling Electricity Helpline 16216...");
callFunction("brac-call", "📞 Calling Brac Helpline 16445...");
callFunction("railway-call", "📞 Calling Bangladesh Railway Helpline 163...");
