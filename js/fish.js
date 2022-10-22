//Main class
class Fish {
  constructor(speedX, id) {
    this.x = -5;
    this.y = 420;
    this.width = 50;
    this.height = 50;
    this.speedX = speedX;
    this.id = id;
  }

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.x += this.speedX;
    } else {
      this.x = 0;
    }
  }
}

//Yellow fish class
class YellowFish extends Fish {
  constructor(speedX, id) {
    super(speedX, id);
    this.score = 5;
  }

  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_04.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
  }
}

//Blue fish class
class BlueFish extends Fish {
  constructor(speedX, id) {
    super(speedX, id);
    this.score = 10;
  }

  draw() {
    const blueFish = new Image();
    blueFish.src = "./images/Icons_10.png";
    context.drawImage(blueFish, this.x, this.y, this.width, this.height);
  }
}

//Red fish class
class RedFish extends Fish {
  constructor(speedX, id) {
    super(speedX, id);
    this.score = 15;
  }

  draw() {
    const redFish = new Image();
    redFish.src = "./images/Icons_07.png";
    context.drawImage(redFish, this.x, this.y, this.width, this.height);
  }
}

//Fish hook class
class Hook {
  constructor() {
    this.x = 535;
    this.y = 410;
    this.width = 25;
    this.height = 25;
    this.image = new Image();
    this.image.src = "./images/fish-hook.png";
    this.movement = 0.5;
  }

  draw() {
    this.moveHook();
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    console.log(this.y);
  }

  moveHook() {
    if (this.y === 420) {
      this.movement = -0.5;
    }
    if (this.y === 410) {
      this.movement = 0.5;
    }
    this.y += this.movement;
  }
}
