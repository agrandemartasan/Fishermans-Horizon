//Our founding fathers canvas and context
const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

//Declaring some important variables for the game
let score = 0;
let fishIdCount = 0;
let interval;
let gameStarted = false;
const fishHook = new Hook();
let fishNet = [];
let musicIsPlaying = false;

//Setting up overall time of game,
//start and stop features,
//clear canvas feature,
//score and empty array for our fishes
const gameArea = {
  frames: 500,
  start: () => {
    interval = setInterval(updateGameArea, 30);
  },
  stop: () => {
    clearInterval(interval);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  drawScore: () => {
    context.font = "bold 18px Arial";
    context.fillStyle = "white";
    context.fillText(`Score: ${score}`, 325, 230);
  },
  fishes: [],
};

//Function to reset the game
function resetGame() {
  gameArea.frames = 300;
  gameArea.clear();
  score = 0;
  chronometer.currentTime = 120;
  gameArea.fishes = [];
}

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

//Function to draw sea ground, treasure chest, fish points table
function drawStuff() {
  const seaGround = new Image();
  seaGround.src = "./images/ocean-ground.png";
  const fishPoints = new Image();
  fishPoints.src = "./images/fishPoints.png";
  const treasureChest = new Image();
  treasureChest.src = "./images/treasurechest2.png";

  context.drawImage(treasureChest, 740, 515, 100, 85);
  context.drawImage(fishPoints, 760, 188, 120, 120);
  context.font = "bold 18px Arial";
  context.fillStyle = "white";
  context.fillText(`Fish Points`, 770, 170);

  context.drawImage(seaGround, 0, 470, 384, 144);
  context.drawImage(seaGround, 384, 470, 384, 144);
  context.drawImage(seaGround, 768, 470, 384, 144);
}

//Overall animations during game
function animate() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  gameArea.drawScore();
  fishHook.draw();
  drawStuff();
  createFish();
  drawAndMoveFishes();
}

//Canvas update
function updateGameArea() {
  gameArea.frames--;
  gameArea.clear();
  if (gameArea.frames > 0) {
    animate();
  } else {
    gameArea.stop();
    chronometer.stop();
    gameStarted = false;
    context.font = "50px Arial";
    context.fillStyle = "white";
    context.fillText(`Well done! You got ${score} points!`, 152, 480);
    context.fillText(`Press space to start again!`, 175, 530);
  }
}

//Start game text
context.font = "50px Arial";
context.fillStyle = "white";
context.fillText(`Press space to start!`, 215, 525);

//Instructions
context.font = "bold 20px Arial";
context.fillStyle = "white";
context.fillText(`You have 2 minutes to`, 485, 60);
context.fillText(`catch as many fishes as`, 485, 85);
context.fillText(`possible. Be fast and`, 485, 110);
context.fillText(`use SPACE to catch them!`, 485, 135);
context.fillText(`Good luck!`, 485, 160);
context.strokeStyle = "white";
context.strokeRect(470, 30, 280, 140);
