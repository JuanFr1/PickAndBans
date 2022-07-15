var timeLeft = 60;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    doSomething();
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}
function doSomething() {
  timeLeft = 60;
}