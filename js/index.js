const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
let interval;
const gameArea = {
  frames: 120,
  start: () => {
    interval = setInterval(updateGameArea, 1000);
  },
  stop: () => {
    clearInterval(interval);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  timer: () => {
    const time = Math.floor(gameArea.frames--);
    context.font = "40px Arial";
    context.fillStyle = "black";
    context.fillText(`Timer: ${time}`, 20, 75);
  },
};
function updateGameArea() {
  gameArea.clear();
  gameArea.timer();
}
gameArea.start();
