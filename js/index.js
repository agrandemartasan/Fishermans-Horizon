const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let score = 0;
let fishIdCount = 0;
let interval;

let gameStarted = false;

const gameArea = {
  frames: 12000,
  start: () => {
    interval = setInterval(updateGameArea, 30);
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
    context.fillText(`Score: ${score}`, 570, 200);
  },
  fishes: [],
};

const fishHook = new Hook();

function createFish() {
  if (gameArea.fishes.length <= 10) {
    if (gameArea.frames % 120 === 0) {
      yellowFish = new YellowFish(2, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(yellowFish);
    }
    if (gameArea.frames % 100 === 0) {
      blueFish = new BlueFish(3, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(blueFish);
    }
    if (gameArea.frames % 240 === 0) {
      redFish = new RedFish(4, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(redFish);
    }
  }
}

let fishNet = [];

function drawAndMoveFishes() {
  gameArea.fishes.forEach((fish, index) => {
    fish.draw();
    fish.moveRight();
    if (detectCollision(fish, index)) {
      if (fishNet.length === 0) {
        fishNet.push(fish);
      }
    } else {
      fishNet.splice(index, 1);
    }
  });
}

//Overall animations during game
function animate() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  fishHook.draw();
  createFish();
  drawAndMoveFishes();
  gameArea.timer();
}

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

//Start game text
context.font = "50px Arial";
context.fillStyle = "white";
context.fillText(`Press space to start`, 255, 305);
