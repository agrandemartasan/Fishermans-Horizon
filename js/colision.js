function detectCollision(fish, index) {
  if (
    fish.x < fishHook.x + fishHook.width &&
    fish.x + fish.width > fishHook.x &&
    fish.y < fishHook.y + fishHook.height &&
    fish.y + fish.height > fishHook.y
  ) {
    //   setTimeout(() => {
    //  gameArea.fishes.splice(index, 1);
    //  }, 500);

    // score += fish.score;
    return true;
  } /*
  if (
    blueFish.x < fishHook.x + fishHook.width &&
    blueFish.x + blueFish.width > fishHook.x &&
    blueFish.y < fishHook.y + fishHook.height &&
    blueFish.y + blueFish.height > fishHook.y
  ) {
    score += blueFish.score;
  }
  if (
    redFish.x < fishHook.x + fishHook.width &&
    redFish.x + redFish.width > fishHook.x &&
    redFish.y < fishHook.y + fishHook.height &&
    redFish.y + redFish.height > fishHook.y
  ) {
    score += redFish.score;
  } */ /* else {
    console.log("No colision");
  } */
}

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    if (gameStarted === false) {
      gameArea.start();
      gameStarted = true;
    }
    if (fishNet.length > 0) {
      fishNet.forEach((fish) => {
        score += fish.score;
        gameArea.fishes = gameArea.fishes.filter(
          (_fish) => _fish.id !== fish.id
        );
      });
    }
  }
});
