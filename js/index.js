const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let score = 0;

let interval;
const gameArea = {
  frames: 12000,
  start: () => {
    interval = setInterval(updateGameArea, 1000 / 30);
  },
  stop: () => {
    clearInterval(interval);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  timer: () => {
    const time = gameArea.frames.toString().split("").slice(2).join("");
    context.font = "20px Arial";
    context.fillStyle = "black";
    context.fillText(`Velocity frames: ${time}`, 20, 75);
  },
};

const fishHook = new Hook();
const yellowFish = new Fish(2);

function animate() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  fishHook.draw();
  yellowFish.draw();
  yellowFish.moveRight();
  gameArea.timer();
}

//requestAnimationFrame(animate);

function updateGameArea() {
  gameArea.frames--;
  gameArea.clear();
  if (gameArea.frames > 0) {
    animate();
  } else {
    gameArea.stop();
    console.log("GAME OVER");
  }
}
gameArea.start();
