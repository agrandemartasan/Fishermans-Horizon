//Function to detect collision
function detectCollision(fish, index) {
  if (
    fish.x < fishHook.x + fishHook.width &&
    fish.x + fish.width > fishHook.x &&
    fish.y < fishHook.y + fishHook.height &&
    fish.y + fish.height > fishHook.y
  ) {
    return true;
  }
}

//Background music
let myMusic;
function playMusic() {
  myMusic = new Audio(
    "https://res.cloudinary.com/dr2lhtfs8/video/upload/v1666125846/Fishermans_horizon.mp3"
  );
  myMusic.play();
}

//Event Listener for space bar to start game and catch fishes
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    if (!gameStarted) {
      resetGame();
      gameArea.start();
      gameStarted = true;
      chronometer.start(printTime);
      if (!musicIsPlaying) {
        playMusic();
        musicIsPlaying = true;
      }
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
