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


//Event Listener -- everytime button is clicked, cookies increase by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  cookieCounter.innerHTML = cookieCount;
})

//Event Listener -- Buy Click Power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})
