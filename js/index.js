const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let score = 0;
let interval;
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
let yellowFish, blueFish, redFish;

function createFish() {
  if (gameArea.frames % 120 === 0) {
    yellowFish = new YellowFish(4, gameArea.frames);

    gameArea.fishes.push(yellowFish);
    /*blueFish = new BlueFish(2);
    gameArea.fishes.push(blueFish);
    redFish = new RedFish(3);
    gameArea.fishes.push(redFish)*/
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

function animate() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  fishHook.draw();
  createFish();
  drawAndMoveFishes();
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
