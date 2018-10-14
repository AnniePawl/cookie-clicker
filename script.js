//declare default variables
let cookieCount = 0;
let clickPower = 1;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//Event Listener -- everytime button is clicked, cookies increase by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  cookieCounter.innerHTML = cookieCount;
})
