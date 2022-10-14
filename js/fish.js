class Fish {
  constructor() {
    this.x = 0;
    this.y = 430;
    this.width = 50;
    this.height = 50;
    this.speedX = 70;
  }

  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_04.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.x += this.speedX;
    }
  }
}

class Hook {
  constructor() {
    this.x = 535;
    this.y = 415;
    this.width = 25;
    this.height = 25;
  }

  draw() {
    const fishHook = new Image();
    fishHook.src = "./images/fish-hook.png";
    context.drawImage(fishHook, this.x, this.y, this.width, this.height);
  }
}
