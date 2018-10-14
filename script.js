/********************************

        COOKIE clicker

********************************/

//default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');
cookieCounter.innerHTML = cookieCount;


cookieClicker.addEventListener("click", function() { cookieCount = cookieCount + clickPower;
// update cookieCounter
refreshCookieCount()
})

if (cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from the price of the item
  cookieCount -= clickPowerPriceAmount;
  refreshCookieCount()
}

//Event Listener -- Buy Click Power
buyClickPower.addEventListener('click', function () {
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("item succesfully Bought");
        // subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        // update cookieCounter
        refreshCookieCount()
        // Upgrade power Level
        clickPowerLevelNumber += 1;
        // Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        // Update click power
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
        // refresh shop  items
        refreshPowerClick()
    } else {
        console.log("you don't have enough cookies!");
  }
})

//cookieCount Function
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

//Refresh Shop Function
let refreshPowerClick = function() {
  clickPowerLevel.innterHTML = clickPowerLevelNumber
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}
