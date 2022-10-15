function detectCollision() {
  if (
    yellowFish.x < fishHook.x + fishHook.width &&
    yellowFish.x + yellowFish.width > fishHook.x &&
    yellowFish.y < fishHook.y + fishHook.height &&
    yellowFish.y + yellowFish.height > fishHook.y
  ) {
    score += 1;
  } if (
    blueFish.x < fishHook.x + fishHook.width &&
    yellowFish.x + yellowFish.width > fishHook.x &&
    yellowFish.y < fishHook.y + fishHook.height &&
    yellowFish.y + yellowFish.height > fishHook.y
  )
  else {
    console.log("No colision");
  }
}
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 32) {
    detectCollision();
  }
});
