/********************************

        COOKIE clicker

********************************/

//default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//DOM variables
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


/********************************

          Grandmas

********************************/

//default variables
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//Buy a Grandma
buyGrandma.addEventListener("click", function() {
    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
    // Subtract cookies from price of the item.
    cookieCount +=  - grandmaPriceAmount;
    refreshCookieCount()
    //upgrade power level
    grandmaLevelNumber += 1;
    //update price
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
    grandmaPower += 10;
    //turn autoGrandma on!
    autoGrandma = true
    autoGrandmaStart();
    //refresh shop item
    refreshGrandma();
})

//Game Loop
let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}


//Frefresh Grandma Function
let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}
