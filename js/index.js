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
    context.fillStyle = "white";
    context.fillText(`Score: ${score}`, 810, 50);
  },
  fishes: [],
};

const fishHook = new Hook();
let fishNet = [];

//Function to create fishes
function createFish() {
  if (gameArea.fishes.length <= 7) {
    if (gameArea.frames % 160 === 0) {
      yellowFish = new YellowFish(3, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(yellowFish);
    }
    if (gameArea.frames % 260 === 0) {
      blueFish = new BlueFish(4.5, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(blueFish);
    }
    if (gameArea.frames % 310 === 0) {
      redFish = new RedFish(6, fishIdCount);
      fishIdCount++;
      gameArea.fishes.push(redFish);
    }
  }
}

//Function to draw and move fishes
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

//Function to draw sea ground
function drawSeaGround() {
  const seaGround = new Image();
  seaGround.src = "./images/ocean-ground.png";
  context.drawImage(seaGround, 0, 470, 384, 144);
  context.drawImage(seaGround, 384, 470, 384, 144);
  context.drawImage(seaGround, 768, 470, 384, 144);
}

//Overall animations during game
function animate() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  fishHook.draw();
  drawSeaGround();
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
