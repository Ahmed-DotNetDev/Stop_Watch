window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var btnStart = document.getElementById("button-start");
  var btnStop = document.getElementById("button-stop");
  var btnReset = document.getElementById("button-reset");
  var Interval;

  btnStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 70);
  };

  btnStop.onclick = function () {
    clearInterval(Interval);
  };

  btnReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++; //tens :00 =1
    var snd = new Audio('/alert-alarm.wav');

    if (tens <= 9) { //9 
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) { //>9=>10
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      //Testing log
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
      clearInterval(Interval);
      snd.play();
    }
  }
};