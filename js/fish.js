class Fish {
  constructor(speedX) {
    this.x = -300;
    this.y = 420;
    this.width = 50;
    this.height = 50;
    this.speedX = speedX;
  }

  

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.x += this.speedX;
    } else {
      this.x = 0;
    }
  }
}

class YellowFish extends Fish {
  constructor (speedX) {
    super(speedX);
    this.score = 5;
  }
  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_04.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
  }
}

class BlueFish extends Fish {
  constructor (speedX) {
    super(speedX);
    this.score = 10;
  }
  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_10.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
  }
}

class RedFish extends Fish {
  constructor (speedX) {
    super(speedX);
    this.score = 15;
  }
  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_07.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
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

