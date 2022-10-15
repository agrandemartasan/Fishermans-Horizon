class Chronometer {
  constructor() {
    this.currentTime = 120;
    this.intervalId = null;
  }

  draw() {
    context.font = "40px Arial";
    context.fillStyle = "black";
    context.fillText(`Timer: ${this.currentTime}`, 40, 100);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let input = value.toString();
    let paddedNumber = "";
    if (value < 10) {
      paddedNumber = ("0" + value).slice(-10);
      return paddedNumber;
    }
    return input;
  }
}

const chronometer = new Chronometer();
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
  minDec.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
  secDec.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
}

//START GAME
startBtn.addEventListener("click", () => {
  if (startBtn.classList.contains("start")) {
    chronometer.start(printTime);
  }
});
