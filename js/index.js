const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let score = 0;
let interval;
const gameArea = {
  frames: 120000,
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
    context.fillText(`Score: ${score}`,570,200);
   
  },
  fishes: [],
};

const fishHook = new Hook();


function createFish() {
  if(gameArea.frames % 240 === 0) {
    const yellowFish = new YellowFish(3);
    gameArea.fishes.push(yellowFish);
    const blueFish = new BlueFish(5);
    gameArea.fishes.push(blueFish);
    const redFish = new RedFish(8);
    gameArea.fishes.push(redFish)
  }
}
function drawAndMoveFishes(){
  gameArea.fishes.forEach((fish)=>{
    fish.draw();
    fish.moveRight();
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
  /*  detectCollision(); */
}

gameArea.start();
